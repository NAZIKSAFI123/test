import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import '../components/informationUser.css'
const InformationUser = ({user}) => {
// const [user,setUser] = useState("");
// let res = "uuuuu" ;
//   useEffect(async()=>{
//       res = await axios.get("http://localhost:9999/user/2");
//    setUser(res.data[0])
//   },[])
 
//   console.log(user);
  return (
    <>
   
    <div className="contenairInf" > 
    <h4 className="rightbarTitle">User information</h4><br/>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Ville:</span>
        <span className="rightbarInfoValue">{user.ville}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Adresse:</span>
        <span className="rightbarInfoValue"> {user.Adresse} </span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Niveau Etudiant:</span>
        <span className="rightbarInfoValue">{user.NiveauEtudiant}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Nombre de etudiants:</span>
        <span className="rightbarInfoValue">
          20
        </span>
      </div>
    </div>
    <div className="">
      
    </div>

    </div>

  </>
  )
}

export default InformationUser