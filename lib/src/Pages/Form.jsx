import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const params = useParams();
  const [instructionItemNumber, setIntructionItemNumber] = useState(0);

  //   console.log(params);

  return (
    <div className="from--container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">
          Recipe Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="">
          Description:
          <input type="text" name="description" />
        </label>
        <label htmlFor="">
          Ingredients:
          <input type="text" name="ingredients" />
        </label>
        <label htmlFor="">
          Instruction:
          <button
            onClick={() => setIntructionItemNumber(instructionItemNumber + 1)}
          >
            Add Instruction
          </button>
          {Array(instructionItemNumber)
            .fill(null)
            .map((d, i) => {
              return (
                <input type="text" key={i} name={`instrunction-${i + 1}`} />
              );
            })}
        </label>
        <label htmlFor="">
          Image:
          <input type="file" name="image" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
