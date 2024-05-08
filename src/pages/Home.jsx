import React from 'react'
import Navbar from '../components/Navbar'
import { CateforyMenu } from '../components/CateforyMenu'
import Food from '../components/Food'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
    <Navbar/>
    <CateforyMenu/>
    <Food/>
    <Cart/>
    </>
    
  )
}

export default Home