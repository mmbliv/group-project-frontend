import React from "react";
import "./HeaderIconBtn.css";

export default function HeaderIconBtn(props) {
  console.log(props);
  return (
    <div className="header--btn">
      <div className="header--btn__icon">
        <props.icon />
      </div>
      <div className="header--btn__text">{props.text}</div>
    </div>
  );
}
