import React, { useState }from 'react';
import './LikeButton.css'
import {  HiOutlineHeart, HiHeart } from "react-icons/hi2"

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleLikeButton = () => {
        setLiked(!liked);
    }
    return ( 
        <div className="like-btn--container" 
        style={
            { 
                backgroundImage: liked?"linear-gradient(to bottom right, #000000, #8e2c2c)": "linear-gradient(to bottom right, #000000, #464646)",
                color: liked?"#ac1414":"#727272"
            }
        }
        onClick={handleLikeButton}>
            <HiOutlineHeart />
        </div>
     );
}
