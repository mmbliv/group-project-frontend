import React from 'react';
import './LikeButton.css'
import {  HiOutlineHeart, HiHeart } from "react-icons/hi2"

export default function LikeButton() {
    return ( 
        <div className="like-btn--container">
            <HiOutlineHeart />
        </div>
     );
}
