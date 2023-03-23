import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import "./Form.css";

export default function Form() {
  // This state is used to add more instruction item, when click Add Instruction Button,
  // this state will be incresed by one, and one more line of instruction input will be added
  const [instructionItemNumber, setIntructionItemNumber] = useState(1);

  // This state is used to store body data that will be sent in request body
  const [bodyData, setBodyData] = useState({});

  // This state is used to store the instruction input when the Add Instruciton button is hitted
  const [instructionInput, setInstructionInput] = useState({});

  //
  function handleChange(e) {
    if (e.target.name === "name") {
      setBodyData((preData) => {
        return { ...preData, name: e.target.value };
      });
    }
    if (e.target.name === "description") {
      setBodyData((preData) => {
        return { ...preData, description: e.target.value };
      });
    }
    if (e.target.name === "ingredients") {
      setBodyData((preData) => {
        return { ...preData, components: e.target.value.split(",") };
      });
    }
    if (e.target.name === "instrunction") {
      setInstructionInput({
        position: e.target.id,
        display_text: e.target.value,
      });
    }
    if (e.target.name === "cook_time") {
      setBodyData((preData) => {
        return { ...preData, cook_time_minutes: +e.target.value };
      });
    }
  }

  function handleAdd() {
    setIntructionItemNumber(instructionItemNumber + 1);
    setBodyData((preData) => {
      if (preData.instruction) {
        return {
          ...preData,
          instruction: [...preData.instruction, instructionInput],
        };
      } else {
        return {
          ...preData,
          instruction: [instructionInput],
        };
      }
    });
  }

  function handleSubmit() {
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    };
    fetch("http://localhost:4000/recipes", reqOptions)
      .then((res) => res.json())
      .then((d) => console.log(d));
  }
  return (
    <div className="form--container">
      <form onSubmit={(e) => e.preventDefault()} className="form--content">
        <label htmlFor="" className="form--label">
          Recipe Name:
          <input
            type="text"
            name="name"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="" className="form--label">
          Description:
          <input
            type="text"
            name="description"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="" className="form--label">
          Ingredients:
          <input
            type="text"
            name="ingredients"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="" className="form--label">
          Instruction:
          <div className="form--instructions__container">
            {Array(instructionItemNumber)
              .fill(null)
              .map((d, i) => {
                return (
                  <input
                    type="text"
                    key={i}
                    id={i + 1}
                    name="instrunction"
                    className="form--input"
                    onChange={(e) => handleChange(e)}
                  />
                );
              })}
            <button
              onClick={() => handleAdd()}
              className="form--btn form--btn__add"
            >
              <GrAdd />
              Add Instruction
            </button>
          </div>
        </label>

        <label htmlFor="" className="form--label">
          cook_time_minutes:
          <input
            type="text"
            name="cook_time"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="" className="form--label">
          Image:
          <input
            type="file"
            name="image"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button
          type="submit"
          className="form--btn form--btn__submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
