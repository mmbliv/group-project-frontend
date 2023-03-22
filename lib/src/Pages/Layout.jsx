import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

export default function Layout() {
  return (
    <div className="layout--container">
      {/* <p>Layout Test</p> */}
      <Header />
      {/* <div className="layout--content">
                <Outlet />
            </div> */}
    </div>
  );
}
