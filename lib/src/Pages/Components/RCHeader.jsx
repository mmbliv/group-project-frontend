import React from 'react';
import './RCHeader.css'

export default function RCHeader(props) {
    return ( 
        <div className="RCH--container">
            <p className="RCH--title">{props.title}</p>
        </div>
     );
}