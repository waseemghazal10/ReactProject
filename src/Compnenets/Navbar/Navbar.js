import React from 'react'
import NavButton from '../NavButton/NavButton'
import './Navbar.scss'

function Navbar() {
  return (
    <div class = "navbar">
        <h1>Web Topics</h1>
        <div class = "buttonContainer">
            <NavButton name = {"Dark Mode"} icon = {"fa fa-moon-o"}/>
            <NavButton name = {"Favorites"} icon = {"fa fa-heart-o"}/>
        </div>
    </div>
  )
} 

export default Navbar