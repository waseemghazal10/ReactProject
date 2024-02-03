import React from 'react'
import './NavButton.scss'


function NavButton(props) {

  return (
      <button class = "btn"><i class={props.icon}></i> 
      <span>{props.name}</span> 
      </button>
  )
}

export default NavButton