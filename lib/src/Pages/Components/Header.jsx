import React from "react";
import HeaderIconBtn from "./HeaderIconBtn";
import { BsFillBasketFill } from "react-icons/bs";
import { MdPlaylistAddCircle } from "react-icons/md";

import "./Header.css";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--content">
        <p className="header--text">Recipe</p>
        <div className="header--btns">
          <HeaderIconBtn
            icon={BsFillBasketFill}
            text="Groceries"
            link="groceries"
          />
          <HeaderIconBtn
            icon={MdPlaylistAddCircle}
            text="Add Recipe"
            link="form"
          />
        </div>
      </div>
    </div>
  );
}
