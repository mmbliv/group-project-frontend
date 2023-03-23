import React from 'react';
import './Home.css'
import { RecipeCard } from './Components'
import { useLoaderData, Link } from 'react-router-dom'

export default function Home() {

    const testData = useLoaderData()
    let testArr = []

    testData.map(({name, img, _id}) => {
        if(img !== null){
            return(
                testArr.push(
                    <Link to={`recipe/${_id}`} key={_id} style={{textDecoration: 'none'}}>
                        <RecipeCard title={name} img={img} alt={name} />
                    </Link>
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
