import React from 'react'
import './Search.scss'


function Search() {
  return (
    <div class = "searchBar">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder='Search the website...'/>
    </div>
  )
}

export default Search