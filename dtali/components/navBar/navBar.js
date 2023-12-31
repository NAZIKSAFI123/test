import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import "./navBar.css";

const NavBar = () => {
  // const [reversBgLogo, setReversBgLogo] = useState(false);
  const user1 = JSON.parse(sessionStorage.getItem("user"));
  console.log("from navbar ", user1);
  
  const navB = document.querySelector("#navBar");
  window.addEventListener("scroll", fixNav);

  function fixNav() {
    if (window.scrollY > navB.offsetHeight + 150) {
      navB.classList.add("active");
    } else {
      navB.classList.remove("active");
    }
  }

  // const [user,setUser] = useState(false);

  // setUser(Boolean(sessionStorage.getItem("userId")));

  const user = Boolean(sessionStorage.getItem("userId"));
  const navigate = useNavigate();

  const onLogin = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/posts/postprof">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Postes Prof{" "}
            </div>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/posts/postetudiant">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Postes Etudiant{" "}
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts/mesposts">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Mes Postes{" "}
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts/addpost">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Poster
            </div>
          </Link>
        </li>

        <li className="nav-item dropdown">
          <div
            className="nav-link  dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
          >
            <img
              // src="../../pages/noAvatar.jpg"
              // src={logoProfile}
              src={`http://localhost:9999/images/${user1.Image}`}
              className="img-user"
              alt=""
            />
          </div>
          <ul id="sub-munu" className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                className="dropdown-item item-sub"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                {" "}
                profile
              </button>
            </li>
            <hr id="hr" />
            <li>
              <button className="dropdown-item item-sub" onClick={logout}>
                {" "}
                Log out{" "}
              </button>
            </li>
          </ul>
        </li>
      </>
    );
  };

  const notLogin = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/singin">
            {" "}
            sing in
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/singup">
            sing up
          </Link>
        </li>
      </>
    );
  };

  const logout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("user");
    console.log("loged out");

    navigate("/singin");
  };

  return (
    <>
      <nav
        id="navBar"
        className="fixed-top  navbar navbar-expand-lg navB navbar-dark "
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.inforjeuneshuy.be/wp-content/uploads/2019/02/job-%C3%A9tudiant1-1024x211.png"
              
              width="170"
              height="38"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              {}
            </ul>
            <ul className="navbar-nav ms-auto">
              {user ? onLogin() : notLogin()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;