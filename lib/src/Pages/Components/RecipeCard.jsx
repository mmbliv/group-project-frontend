import React from 'react';
import './RecipeCard.css'
import RCHeader from './RCHeader'
import RCFooter from './RCFooter'

export default function RecipeCard() {
    return ( 
        <div className="recipe-card--container">
            <RCHeader />
            <div className="recipe-card--content">
                <p>Rc content test</p>
            </div>
            <RCFooter />
        </div>
     );
}
