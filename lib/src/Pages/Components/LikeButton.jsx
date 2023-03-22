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
        style={{backgroundColor: liked?'red':'white'}}
        onClick={handleLikeButton}>
            <HiOutlineHeart />
        </div>
     );
}
