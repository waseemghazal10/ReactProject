import React from 'react'
import './Card.scss'

function Card(props) {
  return (
    <div class="card">
      <img src="hf.png" alt={props.language}></img>
      <div class = "cardBody">
        <h1>{props.title}</h1>
        <h2>{props.language}</h2>
        <div class="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </div>

        <p>Auther: {props.auther}</p>
      </div>
    </div>
  )
}

export default Card