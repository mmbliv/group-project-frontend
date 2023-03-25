import React from 'react';
import './RecipePage.css'
import { useParams, useLoaderData } from 'react-router-dom'

export default function RecipePage() {

    const recipeId = useParams()
    const recipeData = useLoaderData()
    const recipeArr = []
    const instructionArr = []
    const componentArr = []

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

    recipeArr[0].components.map((elem) => {
        return(
            componentArr.push(
                    <li className="RP--component--text" key={elem} >{elem}</li>
             )
        )
    })

    return ( 
        <div className="RP--container">
            <div className="RP--title__container">
                <p className="RP--title">{recipeArr[0].name}</p>
            </div>
            <div className="RP--lineBreak"></div>
            <div className="RP--head--container">
                <div className="RP--tape"></div>
                <div className="RP--img__container">
                    <img src={recipeArr[0].img} alt={recipeArr[0].name} className="RP--img" />
                </div>
                <div className="RP--components__container">
                        <div className="RP--components__title">
                            <p>Ingredients</p>
                        </div>
                        <ul className="RP--components--list">
                            {componentArr}
                        </ul>
                </div>
            </div>
            <div className="RP--content">
                <div className="RP--instructions__container">
                    <div className="RP--instructions__head">
                        <p className="RP--instructions--title">Directions</p>
                        <div className="RP--cookTime__container">
                            <p className="RP--cookTime__title">Cook Time:</p>
                            <p className="RP--cookTime">{recipeArr[0].cook_time_minutes} minutes.</p>
                        </div>
                    </div>
                    <ol className="RP--instructions--list">
                        {instructionArr}
                    </ol>
                </div>
            </div>
        </div>
     );
}