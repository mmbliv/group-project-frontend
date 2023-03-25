import React, { useEffect, useState } from "react";
import "./GroceriesItem.css";
import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBinFill } from "react-icons/ri";

export default function GroceriesItem(props) {
  const { name, deleted, checked, recipe, createdAt, _id } = props.data;
  const [checkStatus, setCheckStatus] = useState(checked);
  const [deleteStatus, setDeleteStatus] = useState(deleted);

  //   console.log(deleteStatus);

  function handleUpdata() {
    const body = { checked: checkStatus, deleted: deleteStatus };
    const reqOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // needed for multer package
      //   enctype: "multipart/form-data",
      body: JSON.stringify(body),
    };
    fetch(`http://localhost:4000/groceries/:${_id}`, reqOptions)
      .then((res) => res.json())
      .then((d) => console.log(d));
  }

  useEffect(() => {
    window.addEventListener("beforeunload", handleUpdata);
  }, []);

  if (!deleted && !deleteStatus)
    return (
      <div className="groceriesItem--container">
        <p className="groceriesItem--name">{name}</p>
        <p className="groceriesItem--from">
          from <span className="groceriesItem--recipe">{recipe}</span>
        </p>
        <p className="groceriesItem--createdAt">{createdAt}</p>
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
