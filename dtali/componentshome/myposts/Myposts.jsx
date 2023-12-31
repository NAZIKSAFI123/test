import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './myposts.scss'
import {toast} from "react-toastify";

const Myposts = () => {

   const [data, setData] = useState([]);

   useEffect(() =>{
      postRouter();
  
   }, []);
  
    const postRouter = async() =>{
         const res = await axios.get('http://localhost:9999/post');
         if (res.status === 200){
             setData(res.data)
         }
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
         <h1 className="hood  "   width="170"  height="30"> Postes  &nbsp;&nbsp;&nbsp;   Professeurs</h1>
                     {data.map((item, index ) => (
                        <div className="testimonialss">
                        <div className="containerr">
                                      <div>
                                         <img className="imgg" src="https://www.legalloromain.net/wp-content/uploads/2020/06/Jeune-Fille-Etudiante-900x579-1.jpg"/>
                                      </div>
                                      &nbsp;&nbsp;&nbsp;
                       
         <div className="textt">
         <h3 className="ville"> {item.Ville}  </h3> 
         <h4> {item.Nom} &nbsp;&nbsp;&nbsp; {item.Prenom} </h4>
         <h4 className="matiere">{item.Matiere}</h4>  
         <p>{item.commentaire}</p>    
         <h4 className="lead text-secondary "> Etudiante de l'ENSA Tetouan</h4>
                       
                        
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