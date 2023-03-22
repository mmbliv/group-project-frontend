import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--content">
        <p className="footer--content__title">Created by:</p>
        <div className="footer--content__lists">
          <a href="https://github.com/locb65" className="footer--content__link">
            <AiFillGithub />
            <p>locb65</p>
          </a>
          <a href="https://github.com/evRook" className="footer--content__link">
            <AiFillGithub />
            <p>evRook</p>
          </a>
          <a href="https://github.com/mmbliv" className="footer--content__link">
            <AiFillGithub />
            <p>mmbliv</p>
          </a>
        </div>
      </div>
    </div>
  );
}
