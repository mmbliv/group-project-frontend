import React from 'react';
import './Home.css'
import { RecipeCard } from './Components'
import { useLoaderData, Link } from 'react-router-dom'

export default function Home() {

    const recipeData = useLoaderData()
    let recipeArr = []

    recipeData.map(({name, img, _id}) => {
        if(img !== null){
            return(
                recipeArr.push(
                    <Link to={`recipe/${_id}`} key={_id} style={{textDecoration: 'none'}}>
                        <RecipeCard title={name} img={img} alt={name} />
                    </Link>
                )
            )
        }
    })

    return ( 
        <div className="home--container">
            {recipeArr}
        </div>
     );
}
