import React from "react";
import "./RecipePage.css";
import { useParams, useLoaderData, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function RecipePage() {
  const recipeId = useParams();
  const recipeData = useLoaderData();
  const recipeArr = [];
  const instructionArr = [];
  const componentArr = [];
  const navigate = useNavigate();
  const [showReminder, setShowReminder] = useState(false);
  const [message, setMessage] = useState();
  let cookTime = "";

  function handleSubmit(elem) {
    const body = {
      name: elem,
      deleted: false,
      checked: false,
      recipe: recipeArr[0].name,
    };
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      enctype: "multipart/form-data",
      body: JSON.stringify(body),
    };
    fetch("http://localhost:4000/groceries", reqOptions)
      .then((res) => {
        if (res.status === 400) {
          setShowReminder(true);
        }
        return res.json();
      })
      .then((d) => setMessage(d.message));
  }

  function handleDelete() {
    const reqOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      enctype: "multipart/form-data",
    };
    fetch(`http://localhost:4000/recipes/${recipeArr[0]._id}`, reqOptions).then(
      () => navigate("/")
    );
  }
  recipeData.map(
    ({
      _id,
      name,
      img,
      components,
      cook_time_minutes,
      instruction,
      description,
    }) => {
      if (recipeId.id === _id) {
        return (
          recipeArr.push({
            _id,
            name,
            img,
            components,
            cook_time_minutes,
            instruction,
            description,
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
      <div className="RP--component__container">
        <li className="RP--component--list" key={elem}>
          <div className="RP--component--text">{elem} </div>
          <div className="RP--component--btn__container">
            <button
              className="RP--component--btn"
              onClick={() => handleSubmit(elem)}
            >
              + Groceries
            </button>
          </div>
        </li>
      </div>
    );
  });

  if (recipeArr[0].cook_time_minutes !== null) {
    cookTime = `Cook Time: ${recipeArr[0].cook_time_minutes} minutes.`;
  }

  return (
    <div className="RP--container">
      {showReminder && (
        <div className="RP--reminder">
          <p>{message}</p>
          <button
            className="RP--reminder__close"
            onClick={(e) => setShowReminder(false)}
          >
            x
          </button>
        </div>
      )}

      <div className="RP--btns">
        <Link
          to={`/form/${recipeArr[0]._id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="RP--btns--edit">Edit</div>
        </Link>
        <button onClick={handleDelete} className="RP--btns--delete">
          Delete
        </button>
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
          <div className="RP--discription__contianer">
            <div className="RP--discription">
              <p>{recipeArr[0].description}</p>
            </div>
          </div>
          <div className="RP--instructions__head">
            <p className="RP--instructions--title">Directions</p>
            <div className="RP--cookTime__container">
              <p className="RP--cookTime">{cookTime}</p>
            </div>
          </div>
          <ol className="RP--instructions--list">{instructionArr}</ol>
        </div>
      </div>
    </div>
  );
}
