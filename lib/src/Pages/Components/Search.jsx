import React, { useState }from 'react';
import './Search.css'
import { BiSearch } from "react-icons/bi"

export default function Search() {
const [search, setSearch] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
}

const handleSearch = (e) => {
    setSearch(e.target.value)
}

    return ( 
        // should we change the div for the search bar to <form>?
        // will need to find a way to get this to pull a "search" from mongoDB and load that data.

        <div className="search--container" onSubmit={handleSubmit}>
            <div className="search--icon">
                <BiSearch />
            </div>
            <input type="search" value={search} onChange={handleSearch} placeholder="Search..." id="search--input"/>
        </div>
     );
}
