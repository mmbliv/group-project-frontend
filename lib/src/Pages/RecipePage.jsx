import React from 'react';
import './RecipePage.css'
import { useParams, useLoaderData } from 'react-router-dom'

export default function RecipePage() {

    const recipeId = useParams()
    const recipeData = useLoaderData()
    const recipeArr = []
    const instructionArr = []

    // console.log(recipeData)
    // console.log(recipeId)

    recipeData.map(({ _id, name, img, components, cook_time_minutes, instruction }) => {
        if (recipeId.id === _id) {
            return(
                recipeArr.push(
                    {
                        _id,
                        name,
                        img,
                        components,
                        cook_time_minutes,
                        instruction
                    }
                ),
                console.log(recipeArr[0])
            )
        }
    })

    recipeArr[0].instruction.map(({ display_text, position }) => {
        return(
            instructionArr.push(
                    <li className="RP--instruction--text" key={position}>{display_text}</li>
             )
        )
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
                    <ol className="RP--instructions--list">
                        {instructionArr}
                    </ol>
                </div>
                <div className="RP--components__container">
                    <ul className="RP--components--list"></ul>
                </div>
            </div>
        </div>
     );
}