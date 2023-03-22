import React from 'react';
import './Home.css'
import { RecipeCard } from './Components'
import RecipePage from './RecipePage'

export default function Home() {
    return ( 
        <div className="home--container">
            <RecipeCard />
        </div>
     );
}
