import React from 'react';
import './RecipeCard.css'
import RCHeader from './RCHeader'
import RCFooter from './RCFooter'

export default function RecipeCard(props) {
    return ( 
        <div className="recipe-card--container">
            <RCHeader {...props}/>
            <div className="recipe-card--content">
                <div className="recipe-card--img__container">
                    <img src={props.img} alt={props.alt} className="recipe-card--img" />
                </div>
            </div>
            <div className="recipe-card--footer__container">
                <RCFooter />
            </div>
        </div>
     );
}
