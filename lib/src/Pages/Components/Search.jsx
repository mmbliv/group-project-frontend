import React, { useState }from 'react';
import './Search.css'
import { BiSearch } from "react-icons/bi"
import { useNavigate, withRouter } from 'react-router-dom'
import axios from "axios"

export default function Search({setSearchResults}) {
const [search, setSearch] = useState('')
const navigate = useNavigate()


const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        handleSubmit()
        navigate('/search')
    } 
}

const handleSubmit = async(e) => {
    const res = await axios.get(`http://localhost:4000/recipes/name/${search}`)
    setSearchResults(res.data)
    console.log(res.data)
    console.log(search)
}
//set value
const handleChange = (e) => {
    setSearch(e.target.value)

}

// const nextPath = (path) => {
//     this.history.push(path)
// }

    return ( 
        //notsure what to sue for in place of onKeyPress(depreciated) there are two options: onKeyUp and onKeyDown. not sure on what exactly is the difference tbh.

        <div className="search--container" >
            <div className="search--icon">
                <BiSearch />
            </div>
            <input type="search" value={search} onChange={handleChange} placeholder="Search..." id="search--input" onKeyDown={handleKeyPress}/>
        </div>
     );
}
