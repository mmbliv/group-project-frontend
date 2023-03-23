import React, {useState, useEffect} from "react";
import axios from 'axios'   
//need to test this. not sure about current layout or what is the top level component.
const RecipeData = () => {
//set state for recipe data
    const [data, setData] = useState([]);
//fetches recipe data and sets it to state?
    useEffect(() => {
        axios.get("http://localhost:4000/recipes")
          .then(res => {
            setData(res.data);
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
  //div to print recipe data?    
    return (
        <div>
            {data.map(recipe => (
                <div key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name}/>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.description}</p>
                    <p>{recipe.compoonents}</p>
                    <p>{recipe.cook_time_minutes}</p>
                </div>
            ))}
        </div>
    )
}


export default RecipeData;
