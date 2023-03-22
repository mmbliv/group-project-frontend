import React from "react";
import "./Header.css";
import HeaderIconBtn from "./HeaderIconBtn";
import { BsFillBasketFill } from "react-icons/bs";
import { MdPlaylistAddCircle } from "react-icons/md";
import { CiShoppingCart, CiSquarePlus } from "react-icons/ci"

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--content">
        <div className="header--logo__container">
            <img src={require("./img/HeaderLogo.jpg")} alt="" className="header--logo" />
            <p className="header--logo--text">Platefuls</p>
        </div>
        <div className="header--btns">
            <div className="icon--container">
                <div className="groceries--container" id="show--text">
                    <HeaderIconBtn
                      icon={CiShoppingCart}
                      text=""
                      link="groceries"
                    />
                    <p className="groceries--text" id="hidden--text-1">Groceries</p>
                </div>
                <div className="add-recipe--container" id="show--text">
                    <HeaderIconBtn
                      icon={CiSquarePlus}
                      text=""
                      link="form"
                    />
                    <p className="add-recipe--text" id="hidden--text-2">+ Recipe</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
