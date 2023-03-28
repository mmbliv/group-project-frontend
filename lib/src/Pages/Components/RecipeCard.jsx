import React from 'react';
import './RecipeCard.css'
import RCHeader from './RCHeader'
import RCFooter from './RCFooter'
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
    return ( 
        <div className="recipe-card--container">
            <RCHeader {...props}/>
            <div className="recipe-card--content">
                <Link to={`recipe/${props.id}`} style={{ textDecoration: "none" }}>
                    <div className="recipe-card--img__container">
                        <div className="recipe-card--overlay"></div>
                        <img src={props.img} alt={props.alt} className="recipe-card--img" />
                    </div>
                </Link>
            </div>
            <div className="recipe-card--footer__container">
                <RCFooter />
            </div>
        </div>
     );
}
