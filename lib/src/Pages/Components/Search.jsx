import React from 'react';
import './Search.css'
import { BiSearch } from "react-icons/bi"

export default function Search() {
    return ( 
        <div className="search--container">
            <div className="search--icon">
                <BiSearch />
            </div>
            <input type="search" placeholder="Search..." id="search--input"/>
        </div>
     );
}
