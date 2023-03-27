import React from 'react';
import './Thumbnail.css'

export default function Thumbnail({img, name}) {
    return ( 
       <div className="thumbnail--container">
        <div className="thubmnail--img__container">
            <img src={img} alt={name} />
        </div>
        <div className="thumbnail--content__container">
            <p className="thumbnail--content--title">Lorem Ipsum</p>
        </div>
       </div>
     );
}
