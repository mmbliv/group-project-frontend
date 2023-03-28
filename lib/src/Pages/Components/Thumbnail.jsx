import React from 'react';
import './Thumbnail.css'



export default function Thumbnail(props) {
const result = props.result;
    return ( 
        <>
       <div className="thumbnail--container" >
        <div className="thubmnail--img__container">
            <img src={result.img} alt={result.name}/>
        </div>
        <div className="thumbnail--content__container">
            <p className="thumbnail--content--title">{result.name}</p>
        </div>
       </div>
     </>
    )
}
