import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const params = useParams();
  const [instructionItemNumber, setIntructionItemNumber] = useState(0);

  //   console.log(params);

  return (
    <div className="form--container">
      <form onSubmit={(e) => e.preventDefault()} className="form--content">
        <label htmlFor="" className="form--label">
          Recipe Name:
          <input type="text" name="name" className="form--input" />
        </label>
        <label htmlFor="" className="form--label">
          Description:
          <input type="text" name="description" className="form--input" />
        </label>
        <label htmlFor="" className="form--label">
          Ingredients:
          <input type="text" name="ingredients" className="form--input" />
        </label>
        <label htmlFor="" className="form--label">
          Instruction:
          {/* <button
            onClick={() => setIntructionItemNumber(instructionItemNumber + 1)}
          >
            Add Instruction
          </button> */}
          <div className="form--instructions__container">
            {Array(instructionItemNumber)
              .fill(null)
              .map((d, i) => {
                return (
                  <input
                    type="text"
                    key={i}
                    name={`instrunction-${i + 1}`}
                    className="form--input"
                  />
                );
              })}
            <button
              onClick={() => setIntructionItemNumber(instructionItemNumber + 1)}
            >
              Add Instruction
            </button>
          </div>
        </label>
        <label htmlFor="" className="form--label">
          Image:
          <input type="file" name="image" className="form--input" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
