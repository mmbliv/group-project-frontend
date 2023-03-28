import React, { useState } from 'react';
import './SearchPage.css'
import { Thumbnail } from './Components'
import Search from './Components/Search.jsx';

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);

   const handleSearchResults = (results)=> {
        setSearchResults(results);
    }
    return (
        <div className="searchPage--container">
            <div className="searchPage--title__container">
                <p className="searchPage--title">Search Results for "props"</p>
            </div>
            <div className="searchPage--content__container">
                <Thumbnail searchResults={searchResults}/>
            </div>
        </div>
     );
}
