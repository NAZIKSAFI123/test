import React from 'react'
import  Header from "../components/blog/header"
import Navbare from "../components/navBar/navBar"
import  Posts from "../components/blog/postsP"
import  PostsE from "../components/blog/postsE"
import {Routes, Route} from "react-router-dom"
import { Outlet } from 'react-router-dom'

const Postes = () => {
  return (
    <div>

<Navbare /> 

 <Outlet/>


    </div>
  )
}

export default Postes