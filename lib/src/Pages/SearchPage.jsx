import React from 'react';
import './SearchPage.css'
import { Thumbnail } from './Components'

export default function SearchPage() {
    return (
        <div className="searchPage--container">
            <div className="searchPage--title__container">
                <p className="searchPage--title">Search Results for "props"</p>
            </div>
            <div className="searchPage--content__container">
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </div>
        </div>
     );
}
