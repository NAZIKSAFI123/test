
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from "react-toastify";
import './utilisateurs.scss'
const Utilisateurs = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
     posteRouter();
 
  }, []);
 
   const posteRouter = async() =>{
        const res = await axios.get('http://localhost:9999/User');
        if (res.status === 200){
            setData(res.data)
        }
   };
   const deleteeUser = async (id) => {
    if(window.confirm ("vous voulez supprimer ce poste?")){
 
       const res = await axios.delete( `http://localhost:9999/User/${id}`)
       if (res.status === 200){
         toast.success(res.data);
         
     } 
         
    } 
 }

  return (
    <div className="contentt">
    
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
    <h4 className="lead text-secondary "> Etudiante de l'ENSA Tetouan</h4>
               
    <button onClick={() => deleteeUser(item.id)}> Supprimer</button>
           
    </div>
    </div>  
     </div>
                ))}
  




</div>
  )
}

export default Utilisateurs