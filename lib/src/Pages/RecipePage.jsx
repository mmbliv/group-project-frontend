import React from 'react';
import './RecipePage.css'
import { useParams, useLoaderData } from 'react-router-dom'

export default function RecipePage() {

    const recipeId = useParams()
    const recipeData = useLoaderData()
    const recipeArr = []

    // console.log(recipeData)
    // console.log(recipeId)

    recipeData.map(({ _id, name, img }) => {
        if (recipeId.id === _id) {
            return(
                recipeArr.push(
                    {
                        _id,
                        name,
                        img
                    }
                )
            )
        }
    })

    return ( 
        <div className="RP--container">
            <div className="RP--title__container">
                <p className="RP--title">{recipeArr[0].name}</p>
            </div>
            <div className="RP--img__container">
                <img src={recipeArr[0].img} alt="" className="RP--img" />
            </div>
            <div className="RP--content">
                <div className="RP--instructions__container">
                    
                </div>
                <div className="RP--components__container">
                    
                </div>
            </div>
        </div>
     );
}