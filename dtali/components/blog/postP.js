import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {toast} from "react-toastify";

const Myposts = () => {

const [postP, setPostP] = useState([]);
const [postE, setPostE] = useState([]);
const [posts, setPosts] = useState([]);

 useEffect(() =>{
   fpostP();
   console.log('post prof ',postP);
   fpostE();
   console.log('post etudiant ',postE);
   setPosts([...postE,...postP]);
   console.log('tout ',posts);

 }, []);

const userId = sessionStorage.getItem("userId")

  const fpostP = () =>{
        axios.get(`http://localhost:9999/PostProf/${userId}`)
        .then(res =>{
           setPostP(res.data)
        })
        .catch(e =>{
               console.log('the error is ',e);
        })
   };

  const fpostE = () =>{
        axios.get(`http://localhost:9999/post/${userId}`)
        .then(res =>{
           setPostE(res.data)
           console.log('etud ',postE);
        })
        .catch(e =>{

        })
   };

  const deleteUser = async (id) => {
       if(window.confirm ("vous voulez supprimer ce poste?")){

          const res = await axios.delete( `http://localhost:9999/post/${id}`)
          if (res.status === 200){
            toast.success(res.data);
            
        } 
            
       } 
  }

  return (
    <div className="contentt">
      <h1 className='h1a' >Mes  Postes </h1>
         
                      {posts.map((item, index ) => (
                         <div className="testimonialss" key={item.id}>
                         <div className="containerr">
                                       <div>
                                          <img className="imgg" src="https://www.legalloromain.net/wp-content/uploads/2020/06/Jeune-Fille-Etudiante-900x579-1.jpg"/>
                                       </div>
                                       &nbsp;&nbsp;&nbsp;
                        
          <div className="textt">
                         <h3  className="ff"> {item.user?.Nom}  {item.user.Prenom} </h3> 
                         <h4  className="ff">    {item.user.ville} </h4>
                         <h4  className="ff"> {item.titre}</h4>
                        <p>{item.commentaire}  </p>
                        <button> Modifier</button>  &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteUser(item.id)}> Supprimer</button>
                       

                         
                       
                 
          </div>
          </div>  
           </div>
                      ))}
        




    </div>
  )
}

export default Myposts