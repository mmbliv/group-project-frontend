import React from 'react';
import './Home.css'
import { RecipeCard } from './Components'
import RecipePage from './RecipePage'
import { useLoaderData } from 'react-router-dom'

export default function Home() {

    const testData = useLoaderData()
    let testArr = []

    testData.map(({name, img, _id}) => {
        if(img !== null){
            return(
                testArr.push(
                    <RecipeCard title={name} img={img} alt={name} key={_id} />
                )
            )
        }
    })
    console.log(testData)

    return ( 
        <div className="home--container">
            {testArr}
        </div>
     );
}
