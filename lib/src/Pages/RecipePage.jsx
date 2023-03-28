import React from "react";
import "./RecipePage.css";
import { useParams, useLoaderData, useNavigate, Link } from "react-router-dom";

export default function RecipePage() {
  const recipeId = useParams();
  const recipeData = useLoaderData();
  const recipeArr = [];
  const instructionArr = [];
  const componentArr = [];
  const navigate = useNavigate();

  // console.log(recipeData)
  // console.log(recipeId)

  function handleSubmit(elem) {
    // console.log(recipeArr[0]);
    const body = {
      name: elem,
      deleted: false,
      checked: false,
      recipe: recipeArr[0].name,
    };
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // needed for multer package
      enctype: "multipart/form-data",
      body: JSON.stringify(body),
    };
    fetch("http://localhost:4000/groceries", reqOptions);
    // .then((res) => res.json())
    // .then((d) => console.log(d));
  }

  function handleEdit() {}

  function handleDelete() {
    const reqOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // needed for multer package
      enctype: "multipart/form-data",
    };
    fetch(`http://localhost:4000/recipes/${recipeArr[0]._id}`, reqOptions).then(
      () => navigate("/")
    );
    // .then((d) => console.log(d));
  }
  recipeData.map(
    ({ _id, name, img, components, cook_time_minutes, instruction }) => {
      if (recipeId.id === _id) {
        return (
          recipeArr.push({
            _id,
            name,
            img,
            components,
            cook_time_minutes,
            instruction,
          }),
          console.log(recipeArr[0])
        );
      }
    }
  );

  recipeArr[0].instruction.map(({ display_text, position }) => {
    return instructionArr.push(
      <li className="RP--instruction--text" key={position}>
        {display_text}
      </li>
    );
  });

  recipeArr[0].components.map((elem) => {
    return componentArr.push(
      <li className="RP--component--text" key={elem}>
        {elem}{" "}
        <span>
          <button
            className="RP--component--btn"
            onClick={() => handleSubmit(elem)}
          >
            add to groceries
          </button>
        </span>
      </li>
    );
  });

  return (
    <div className="RP--container">
      <div className="RP--btns">
        <Link to={`/form/${recipeArr[0]._id}`}>edit</Link>
        <button onClick={handleDelete}>delete</button>
      </div>
      <div className="RP--img__container">
        <div className="RP--overlay"></div>
        <img
          src={recipeArr[0].img}
          alt={recipeArr[0].name}
          className="RP--img"
        />
      </div>
      <div className="RP--title__container">
        <p className="RP--title">{recipeArr[0].name}</p>
      </div>
      <div className="RP--head--container">
        <div className="RP--components__container">
          <div className="RP--components__title">
            <p>Ingredients</p>
          </div>
          <ul className="RP--components--list">{componentArr}</ul>
        </div>
      </div>
      <div className="RP--content">
        <div className="RP--instructions__container">
          <div className="RP--instructions__head">
            <p className="RP--instructions--title">Directions</p>
            <div className="RP--cookTime__container">
              <p className="RP--cookTime__title">Cook Time:</p>
              <p className="RP--cookTime">
                {recipeArr[0].cook_time_minutes} minutes.
              </p>
            </div>
          </div>
          <ol className="RP--instructions--list">{instructionArr}</ol>
        </div>
      </div>
    </div>
  );
}
