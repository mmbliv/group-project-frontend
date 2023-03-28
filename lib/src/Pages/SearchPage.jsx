import React, { useState } from 'react';
import './SearchPage.css'
import { Thumbnail } from './Components'
import { useLocation, Link } from 'react-router-dom'
import Search from './Components/Search.jsx';

export default function SearchPage() {
    // const [searchResults, setSearchResults] = useState([]);
    const { state}  = useLocation()
    const { results } = state;
    const searchResults = []
    console.log(results)

//    const handleSearchResults = (results)=> {
//         setSearchResults(results);
//         console.log(results)
//     }

    results.map(({ _id, name, img }) => {
        if(img !== null){
            return(
                searchResults.push(
                    <Link to={`../recipe/${_id}`} style={{ textDecoration: "none" }}>
                        <Thumbnail name={name} img={img} key={_id}/>
                    </Link>
                )
            )
        }
    })

    

    return (
        <div className="searchPage--container">
            <div className="searchPage--title__container">
                <p className="searchPage--title">Search Results for "props"</p>
            </div>
            <div className="searchPage--content__container">
                {searchResults}
            </div>
        </div>
     );
}
