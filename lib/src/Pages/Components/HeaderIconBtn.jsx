import React from "react";
import "./HeaderIconBtn.css";
import { Link } from "react-router-dom";
export default function HeaderIconBtn(props) {
  return (
    <div className="header--btn">
      <Link to={props.link} className="header--btn__link">
        <div className="header--btn__icon">
          <props.icon />
        </div>
        <div className="header--btn__text">{props.text}</div>
      </Link>
    </div>
  );
}
