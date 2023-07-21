import React from 'react'
import Navbare from "../components/navBar/navBar"
import  Header from "../components/blog/header"
import Descrip from "../componentshome/description/Description"
import Appercu from "../componentshome/appercu/Appercu"
import Avis from "../componentshome/avis/Avis"
import Footer from "../componentshome/footer/Footer"
import Slider from "../components/blog/slider"
import './home.scss'

const Home = () => {
  
  return (
    <div className='App'>
      <Navbare/>
      <Header/>
      <Descrip/>
      <Avis />
      <div className='cont-aper'>

      <Appercu/>
      <Appercu/>
      <Appercu/>
      <Appercu/>
      </div>
      <Footer /> 
    
    </div>
  )
}

export default Home