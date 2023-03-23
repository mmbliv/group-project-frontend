import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import "./Form.css";

export default function Form() {
  const params = useParams();
  const [instructionItemNumber, setIntructionItemNumber] = useState(0);
  const [bodyData, setBodyData] = useState({});

  //   const body = {};
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
      setBodyData((preData) => {
        if (preData.instruction) {
          return {
            ...preData,
            instruction: [
              ...preData.instruction,
              { position: e.target.id, display_text: e.target.value },
            ],
          };
        } else {
          return {
            ...preData,
            instruction: [
              { position: e.target.id, display_text: e.target.value },
            ],
          };
        }
      });
    }
    if (e.target.name === "cook_time") {
      setBodyData((preData) => {
        return { ...preData, cook_time_minutes: +e.target.value };
      });
    }
  }

  function handleSubmit() {
    // const tempData = [];

    // const filteredInstructionData = bodyData.instruction.map((d) => {
    //   if (!tempData.includes(d.position)) {
    //     tempData.push(d.position);
    //     return d;
    //   }
    //   if (tempData.includes(d.position)) {

    //   }
    // });
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
              onClick={() => setIntructionItemNumber(instructionItemNumber + 1)}
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
