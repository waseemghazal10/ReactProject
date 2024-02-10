import React from 'react'
import Card from '../Card/Card'
import './Body.scss'
import SearchContainer from '../SearchContainer/SearchContainer'

function Body() {
  return (
    <div class = "container">
        <SearchContainer/>
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