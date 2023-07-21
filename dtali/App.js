import React, { Component } from 'react'

import  Home from "./pages/Home"
import  Posts from "./pages/Postes"
import PostE from './components/blog/postsE'
import PostP from './components/blog/postsP'
import MePosts from './components/blog/Titres/mesposts'
import Profile from "./pages/Profile"
import Admin from "./pages/Adminpage"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Singin from "./pages/Singin"
import Singup from "./pages/Register"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  Mespots from "./pages/mespots"
import  Poster from "./pages/addpost"
import Commentaire from "./componentshome/admin/commentaire/commentaire.js"
import Postes from "./componentshome/admin/poste/poste.js"
import Util from "./componentshome/admin/utilisateurs/utilisateurs.js"
import Intro from "./componentshome/introadmin/intro.js"

 function App() {

    return (
      <Router>

      <div className="App">
              <ToastContainer position= "top-center"/>
      
                  <Routes>
                  
                    
           <Route path="/" element={<Home/>} />
                  <Route  path="siladmin" element={<Admin/>} >
                  <Route  index element={<Intro/>} />
                                    <Route  path="listeP" element={<Postes/>} />
                                    <Route  path="listeU" element={<Util/>} />
                                    <Route  path="comentaire" element={<Commentaire/>} />
                   </Route>
                        <Route path="posts" element={<Posts/>} >
                                    <Route  index element={<Mespots/>} />
                                    <Route  path="addpost" element={<Poster/>} />
                                    <Route  path="put/:id" element={<Poster/>} />
                                    <Route  path="mesposts" element={<Mespots/>} />
                                    <Route path="postetudiant" element={<PostE/>} />
                                    <Route  path="postprof" index element={<PostP/>} />
                                    
                        </Route>
                        <Route path="/singin" element={<Singin/>} />
                        <Route path="/singup" element={<Singup/>} />
                        <Route path="/profile" element={<Profile/>} >
                              <Route path=":id" element={<Profile/>} />
                        </Route>
                  </Routes>
                  </div>
            </Router>
     
    )
 
}

export default App;







