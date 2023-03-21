import React from 'react';
import './RecipeCard.css'
import RCHeader from './RCHeader'

export default function RecipeCard() {
    return ( 
        <div className="recipe-card--container">
            <RCHeader />
            <div className="recipe-card--content">
                <p>Rc content test</p>
            </div>
        </div>
     );
}
