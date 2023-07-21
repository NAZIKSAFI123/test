import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import "./poster.scss"
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'



const Addposte = () => {
  const navigate = useNavigate();



  const [titre, setTitre] = useState("");
  const [commentaire, setCommentaire] = useState("");

   const userId = sessionStorage.getItem('userId');
 
 
 
 const handleSubmitE=(e) => {
   e.preventDefault(); 
   if(!titre || !commentaire)
   {
        toast.error("S'ils vous plait remplir les champs");   
   } 
   else 
   {
    axios
    .post('http://localhost:9999/post', {
      titre,
      commentaire,
      userId
    })
    .then(res=>{
      
      toast.success("Poste bien ajouter");
      setTimeout(() => navigate("/posts/postprof"), 500);
      return res ;

    })
    .catch((err) => toast.error("siiir tn3ess"));




  }

 };
 const handleSubmitP=(e) => {
  e.preventDefault(); 
  if(!titre || !commentaire)
  {
       toast.error("S'ils vous plait remplir les champs");   
  } 
  else 
  {
   axios
   .post('http://localhost:9999/PostProf', {
     titre,
     commentaire,
     userId
   })
   .then(res=>{
     
     toast.success("Poste bien ajouter");
     setTimeout(() => navigate("/posts/postprof"), 500);
     return res ;

   })
   .catch((err) => toast.error("siiir tn3ess"));


 }

};






   return (
     <div style={{marginTop: "100px"}}>
       <form style={{margin:"auto",
                   padding: "15px",
                    maxWidth: "400px",
                   alignContent: "center"
          }}
          
        >
          <label htmlFor='titre'>Titre</label>
          <input 
              type="text"
              id="titre"
              name="titre"
              placeholder='Ex: Professeur de math'
              value={titre}
              onChange={e=> setTitre(e.target.value)
              }
          
          
          >

          </input>
          <label htmlFor='commentaire'>commentaire</label>
          <input 
              type="textarea"
              id="commentaire"
              name="commentaire"
              placeholder='Ex: lololololo'
              value={commentaire}
              onChange={e=> setCommentaire(e.target.value) }       
          
          />

        
          <input type="submit" value= "poster comme professeur" onClick={handleSubmitP}/>
          <input type="submit" value= "poster comme etudiant" onClick={handleSubmitE}/>
</form>



     </div>
   
  )
}

export default Addposte