import React, { useEffect, useState, useRef } from "react";
import { useBeforeUnload } from "react-router-dom";
import "./GroceriesItem.css";
import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function GroceriesItem(props) {
  const { name, deleted, checked, recipe, createdAt, _id } = props.data;
  const [checkStatus, setCheckStatus] = useState(checked);
  const [deleteStatus, setDeleteStatus] = useState(deleted);
  const checkRef = useRef();
  const deleteRef = useRef();

  const date = new Date(createdAt);
  // function handleUpdata() {
  //   const body = { checked: checkStatus, deleted: deleteStatus };
  //   console.log("jiji");
  //   const reqOptions = {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     // needed for multer package
  //     //   enctype: "multipart/form-data",
  //     body: JSON.stringify(body),
  //   };
  //   fetch(`http://localhost:4000/groceries/:${_id}`, reqOptions)
  //     .then((res) => res.json())
  //     .then((d) => console.log(d));
  // }

  // useEffect(() => {
  //   window.addEventListener("beforeunload", handleUpdata);
  // }, []);
  // console.log(checkStatus);
  // useBeforeUnload(
  //   React.useCallback(() => {
  //     console.log(checkStatus);
  //     const body = {};
  //     body.checked = checkStatus;
  //     body.deleted = deleteStatus;
  //     const reqOptions = {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     };
  //     fetch(`http://localhost:4000/groceries/:${_id}`, reqOptions)
  //       .then((res) => res.json())
  //       .then((d) => console.log(d));
  //   }, [checkStatus])
  // );

  useBeforeUnload(
    React.useCallback(() => {
      console.log(checkStatus);
      const body = {};
      body.checked = checkStatus;
      body.deleted = deleteStatus;
      const reqOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`http://localhost:4000/groceries/${_id}`, reqOptions)
        .then((res) => res.json())
        .then((d) => console.log(d));
    }, [checkStatus, deleteStatus, _id])
  );

  if (!deleted && !deleteStatus)
    return (
      <div className="groceriesItem--container">
        <p className="groceriesItem--name">{name}</p>
        <p className="groceriesItem--from">
          from <Link className="groceriesItem--recipe">{recipe}</Link>
        </p>
        <p className="groceriesItem--createdAt">
          {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}
        </p>
        <div className="groceriesItem--btns">
          <div
            onClick={() => setCheckStatus(!checkStatus)}
            className={
              checkStatus
                ? "groceriesItem--checkBox__checked"
                : "groceriesItem--checkBox"
            }
          >
            <GiCheckMark />
          </div>
          <div
            onClick={() => setDeleteStatus(!deleteStatus)}
            className="groceriesItem--delete"
          >
            <RiDeleteBinFill />
          </div>
        </div>
      </div>
    );
}
