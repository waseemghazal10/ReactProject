import React from 'react'
import Search from '../Search/Search'
import Select from '../Select/Select'
import './SearchContainer.scss'

function SearchContainer() {
  return (
    <div class = "SearchContainer">
        <Search/>
        <Select title = "Sort By:"/>
        <Select title = "Filter By:"/>

    </div>
  )
}

export default SearchContainer