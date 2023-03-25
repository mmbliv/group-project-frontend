import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import "./Form.css";
import axios from "axios";

export default function Form() {
  // This state is used to add more instruction item, when click Add Instruction Button,
  // this state will be incresed by one, and one more line of instruction input will be added
  const [instructionItemNumber, setInstructionItemNumber] = useState(1);

  // This state is used to store body data that will be sent in request body
  const [bodyData, setBodyData] = useState({});

  // This state is used to store the instruction input when the Add Instruciton button is hitted
  const [instructionInput, setInstructionInput] = useState({});

  //This state for the file in multer

  const [uploadedImg, setUploadedImg] = useState(null);

  //This function is used to handle the input change
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

    // set the data of instruction is slightly different from other input data,
    // cuz instruction data has a nested object (hard to explain).
    // I created a instructionInput state to store the instruction data first, and
    // then use handleAdd()  function to set it into bodyData

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
  // if (e.target.name === "image") {
  //   setUploadedImg((preData) => {
  //     return { ...preData, img: +e.target.value };
  //   });
   
  // }
}

  // When the Add Instruction button is hitted, this function will be excuted.
  //  This will add one more line of instruction input, and also set the instruction data
  // into bodyData
  function handleAdd() {
    setInstructionItemNumber(instructionItemNumber + 1);
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

  function handleImgUpload(e) {
    setUploadedImg(e.target.file);
  }

  // Handle submit

  async function handleSubmit(e) {
    // const reqOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   // needed for multer package
    //   enctype: "multipart/form-data",
    //   body: JSON.stringify(bodyData),
    // };
    // fetch("http://localhost:4000/recipes/uploads", reqOptions)
    //   .then((res) => res.json())
    //   .then((d) => console.log(d));
    e.preventDefault();
    console.log(bodyData);
    console.log(instructionInput);
    console.log(instructionItemNumber);
    console.log(uploadedImg);
    console.log(e.target.files)
    console.log(e.target.file);
    console.log(e.target.image)
    const newRecipe = new FormData(document.querySelector('form'));
    newRecipe.append("name", bodyData.name);
    newRecipe.append("description", bodyData.description);
    newRecipe.append("ingredients", bodyData.components);
    newRecipe.append("cook_time_minutes", bodyData.cook_time_minutes);
    if (bodyData.instruction) {
      for (let i = 0; i < bodyData.instruction.length; i++) {
        newRecipe.append(`instruction[${i}][position]`, bodyData.instruction[i].position);
        newRecipe.append(`instruction[${i}][display_text]`, bodyData.instruction[i].display_text);
      }
    }
    newRecipe.append("image", uploadedImg);
    console.log(newRecipe);
    const reqOptions = {
      headers:{
        "Content-Type": "application/json",
        },
  }
try {
  const res = await axios.post("http://localhost:4000/recipes/uploads", newRecipe, reqOptions)
    console.log(res.data);
    } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="form--container">
      <form onSubmit={(e) => e.preventDefault()} className="form--content" action="/uploads" encType="multipart/form-data">
        {/* Recipe Name Input */}
        <label htmlFor="" className="form--label">
          Recipe Name:
          <input
            type="text"
            name="name"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        {/* Description Input */}
        <label htmlFor="" className="form--label">
          Description:
          <input
            type="text"
            name="description"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        {/* Ingredients Input */}
        <label htmlFor="" className="form--label">
          Ingredients:
          <input
            type="text"
            name="ingredients"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        {/* Instruction Input */}
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

        {/* Cook_time Input */}
        <label htmlFor="" className="form--label">
          Cook_time_minutes:
          <input
            type="text"
            name="cook_time"
            className="form--input"
            onChange={(e) => handleChange(e)}
          />
        </label>

        Image Input
        <label htmlFor="image" className="form--label" >
          Image:
          <input
            type="file"
            name="image"
            className="form--input"
            onChange={(e)=>handleImgUpload(e)}
          />
        </label> 

        {/* Submit*/}
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
