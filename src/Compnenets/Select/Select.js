import React from 'react'
import './Select.scss'

function Select(props) {
    return (
        <div class = "selectList">
            <p>{props.title}</p>
            <select>
                <option value="" disabled selected>Default</option>
                <option value="hi">WelcomeBabyToOur</option>
            </select>
        </div>
    )
}

export default Select