import React from 'react';
import './Thumbnail.css'



export default function Thumbnail(props) {
    return ( 
    <>
       <div className="thumbnail--container" >
        <div className="thubmnail--img__container">
            <img src={props.img} alt={props.name}/>
        </div>
        <div className="thumbnail--content__container">
            <p className="thumbnail--content--title">{props.name}</p>
        </div>
       </div>
    </>
    )
}
