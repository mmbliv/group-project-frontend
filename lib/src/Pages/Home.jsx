import React from 'react';
import './Home.css'
import { RecipeCard } from './Components'
import RecipePage from './RecipePage'
import { useLoaderData } from 'react-router-dom'

export default function Home() {

    const testData = useLoaderData()

    console.log(testData)

    return ( 
        <div className="home--container">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
     );
}
