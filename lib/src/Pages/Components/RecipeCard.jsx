import React from 'react';
import './RecipeCard.css'
import RCHeader from './RCHeader'
import RCFooter from './RCFooter'

export default function RecipeCard() {
    return ( 
        <div className="recipe-card--container">
            <RCHeader />
            <div className="recipe-card--content">
                <div className="recipe-card--img__container">
                    <img src="#" alt="" className="recipe-card--img" />
                </div>
            </div>
            <RCFooter />
        </div>
     );
}
