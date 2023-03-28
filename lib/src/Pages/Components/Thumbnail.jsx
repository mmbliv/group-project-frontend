import React from 'react';
import './Thumbnail.css'


export default function Thumbnail({searchResults}) {

    return ( 
        <>
        {searchResults && searchResults.map((result) => (
       <div className="thumbnail--container" key={searchResults._id}>
        <div className="thubmnail--img__container">
            <img src={searchResults.img} alt={searchResults.name} />
        </div>
        <div className="thumbnail--content__container">
            <p className="thumbnail--content--title">{searchResults.name}</p>
        </div>
       </div>
        ))}
     </>
    )
}
