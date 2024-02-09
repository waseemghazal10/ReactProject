import React from 'react'
import Card from '../Card/Card'
import './Body.scss'

function Body() {
  return (
    <div class = "container">
        <input type='text'/>
        <h1>"24" Web Topics Found</h1>
        <div class = "bodyCard">
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/>
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/>
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/> 
            <Card title = "Web Development Languages" language = "HTML" auther = "Sarah Smith"/>  
        </div>
    </div>
  )
}

export default Body