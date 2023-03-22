import React from "react";
import "./Header.css";
import HeaderIconBtn from "./HeaderIconBtn";
import { BsFillBasketFill } from "react-icons/bs";
import { MdPlaylistAddCircle } from "react-icons/md";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--content">
        <p className="header--text">Recipe</p>
        <div className="header--btns">
            <div className="icon--container">
                <div className="groceries--container" id="show--text">
                    <HeaderIconBtn icon={BsFillBasketFill} text="" />
                    <p className="groceries--text" id="hidden--text-1">Groceries</p>
                </div>
                <div className="add-recipe--container" id="show--text">
                    <HeaderIconBtn icon={MdPlaylistAddCircle} text="" />
                    <p className="add-recipe--text" id="hidden--text-2">+ Recipe</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
