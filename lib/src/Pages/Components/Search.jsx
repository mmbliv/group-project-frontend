import React, { useState }from 'react';
import './Search.css'
import { BiSearch } from "react-icons/bi"

export default function Search() {
const [search, setSearch] = useState('')

//uses set value to communicate with database

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
}

//set value
const handleChange = (e) => {
    setSearch(e.target.value)
}

    return ( 
        // should we change the div for the search bar to <form>?
        // will need to find a way to get this to pull a "search" from mongoDB and load that data.

        //added temporary button to handle state changes. State is stored on submit. need to handle state change on key press of ENTER....

        <div className="search--container" >
            <div className="search--icon">
                <BiSearch />
            </div>
            <input type="search" value={search} onChange={handleChange} placeholder="Search..." id="search--input"/>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
     );
}
