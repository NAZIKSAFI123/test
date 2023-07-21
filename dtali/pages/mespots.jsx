import React from 'react'
import Navbare from "../components/navBar/navBar"
import Myposts from "../componentshome/myposts/Myposts"
import Poster from "../componentshome/poster/Poster"

import './meposts.scss'
const mespots = () => {
  return (
    
<div className='App'>
<Navbare/>
     
<Myposts />  

   
</div>
    
  )
}

export default mespots