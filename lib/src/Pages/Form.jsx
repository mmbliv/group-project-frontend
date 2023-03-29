import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import "./Form.css";

import { useNavigate } from "react-router-dom";

import { BsTruckFlatbed } from "react-icons/bs";

export default function Form() {
  // This state is used to add more instruction item, when click Add Instruction Button,
  // this state will be incresed by one, and one more line of instruction input will be added
  const [instructionItemNumber, setIntructionItemNumber] = useState(1);
  // This state is used to store body data that will be sent in request body
  const [bodyData, setBodyData] = useState({});
  // This state is used to store the instruction input when the Add Instruciton button is hitted
  const [instructionInput, setInstructionInput] = useState({});
  const [isOneMoreInstructionAdded, setIsOneMoreInstructionAdded] =
    useState(false);

  // use this imgURL that get from cloudinary to preview the uploaded img
  const [imgURL, setImgURL] = useState();
  const [loadingImg, setLoadingImg] = useState();
  const imgInputRef = useRef();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id !== "add") {
      const reqOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch(`http://localhost:4000/recipes/${params.id}`, reqOptions)
        .then((res) => res.json())
        .then((d) => {
          // setData(d);
          setBodyData(d);
          setIntructionItemNumber(d.instruction.length);
          setInstructionInput(d.instruction);
          // setImgURL(d.img);
        });
    }
  }, [params.id]);

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
    if (e.target.name === "instruction") {
      setBodyData((pre) => {
        if (pre.instruction) {
          let i = pre.instruction;
          if (!isOneMoreInstructionAdded) {
            i = pre.instruction.map((d) => {
              if (d.position === +e.target.id) {
                // console.log(e.target.id);
                return {
                  position: +e.target.id,
                  display_text: e.target.value,
                };
              } else {
                return d;
              }
            });
          } else {
            i.push({ position: +e.target.id, display_text: e.target.value });
            setIsOneMoreInstructionAdded(false);
          }
          return { ...pre, instruction: i };
        } else {
          return {
            ...pre,
            instruction: [
              {
                position: +e.target.id,
                display_text: e.target.value,
              },
            ],
          };
        }
      });

      // setInstructionInput({
      //   position: e.target.id,
      //   display_text: e.target.value,
      // });
    }
    if (e.target.name === "cook_time") {
      setBodyData((preData) => {
        return { ...preData, cook_time_minutes: +e.target.value };
      });
    }
    if (e.target.name === "img") {
      // setImgData(e.target.files[0]);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "ml_default");
      setLoadingImg(true);
      // host img to cloudianry
      fetch("https://api.cloudinary.com/v1_1/duambh2yn/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((d) => {
          // get the url back from cloudinary
          setImgURL(d.secure_url);
          setLoadingImg(false);
          setBodyData((preData) => {
            return { ...preData, img: d.secure_url };
          });
        });
    }
  }

  // When the Add Instruction button is hitted, this function will be excuted.
  //  This will add one more line of instruction input, and also set the instruction data
  // into bodyData
  function handleAdd() {
    setIntructionItemNumber(instructionItemNumber + 1);
    setIsOneMoreInstructionAdded(true);
  }
  // Handle submit

  // const handleSubmitAndNavigate = async() =>{
  // fetch(`http://localhost:4000/recipes/redirect/${encodeURI(d.name)}`)
  //     .then(res => res.json())
  //     .then((recipe) => {
  //       navigate(`recipe/${recipe._id}`)
      
  //   })
  // }

  function handleSubmit() {
    if (params.id === "add") {
      const reqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // needed for multer package
        enctype: "multipart/form-data",
        body: JSON.stringify(bodyData),
      };
      fetch("http://localhost:4000/recipes/", reqOptions)
        .then((res) => res.json())
        .then((d) => {
           fetch(`http://localhost:4000/recipes/${d._id}`)
           .then(res => res.json())
           .then((recipe) => {
           navigate(`/recipe/${recipe._id}`)
          console.log(d)
        })
      });
    } else {
      const reqOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // needed for multer package
        enctype: "multipart/form-data",
        body: JSON.stringify(bodyData),
      };
      fetch(`http://localhost:4000/recipes/${params.id}`, reqOptions)
        .then((res) => res.json())
        .then((d) => {
             fetch(`http://localhost:4000/recipes/${d._id}`)
           .then(res => res.json())
           .then((recipe) => {
           navigate(`/recipe/${recipe._id}`)
                  // console.log(d)
        })
       });
      }}

  function handleDeleteImg(e) {
    e.stopPropagation();
    setImgURL("");
    setBodyData((pre) => {
      return { ...pre, img: "" };
    });
  }
  // console.log(bodyData.instruction);

  // handleImgloading
  function handleImgLoading() {
    imgInputRef.current.click();
  }
  return (
    <div className="form--container">
      <form onSubmit={(e) => e.preventDefault()} className="form--content">
        {/* Recipe Name Input */}
        <label htmlFor="" className="form--label">
          Recipe Name:
          <input
            type="text"
            name="name"
            className="form--input"
            onChange={(e) => handleChange(e)}
            defaultValue={bodyData && bodyData.name}
            // value={bodyData.name}
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
            defaultValue={bodyData && bodyData.description}
            // value={bodyData.description}
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
            // value={bodyData.components}
            defaultValue={bodyData && bodyData.components}
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
                    name="instruction"
                    className="form--input"
                    onChange={(e) => handleChange(e)}
                    // value={bodyData.instruction[i].display_text}
                    defaultValue={
                      instructionInput[i] && instructionInput[i].display_text
                    }
                  />
                );
              })}
            <button
              onClick={() => handleAdd()}
              className="form--btn form--btn__add"
            >
              {/* <GrAdd style={{color: "#fffbf3"}}/> */}
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
            defaultValue={bodyData && bodyData.cook_time_minutes}
            // value={bodyData.cook_time_minutes}
          />
        </label>

        {/* Image Input
        {/* Image Input */}
        <label htmlFor="" className="form--label">
          Image:
          <input
            type="file"
            ref={imgInputRef}
            name="img"
            className="form--input form--input__img"
            onChange={(e) => handleChange(e)}
          />
          {/* </label>  */}
        </label>

        <div onClick={handleImgLoading} className="form--btn__addImg">
          {!loadingImg && !imgURL && !bodyData.img && <p>add img</p>}
          {loadingImg && <p>loading...</p>}
          {imgURL && <img src={imgURL} alt="img" className="form--img" />}
          {bodyData.img && (
            <img src={bodyData.img} alt="img" className="form--img"></img>
          )}
          {(bodyData.img || imgURL) && (
            <button
              className="form--img__delete"
              onClick={(e) => handleDeleteImg(e)}
            >
              X
            </button>
          )}
        </div>
        {/* Submit */}
        
        <button 
          type="submit"
          className="form--btn form--btn__submit"
          onClick={handleSubmit}>
          Submit

        </button>
      </form>
    </div>
  );
}
