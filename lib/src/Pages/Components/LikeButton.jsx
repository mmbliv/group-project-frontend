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
        style={{backgroundColor: liked?'#fdb7c2':'#efefef', color: liked?'#222222': '#979797'}}
        onClick={handleLikeButton}>
            <HiOutlineHeart />
        </div>
     );
}
