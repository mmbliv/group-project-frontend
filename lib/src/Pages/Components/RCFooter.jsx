import React from "react";
import "./RCFooter.css";
import LikeButton from "./LikeButton";

export default function RCFooter(props) {
  return (
    <div className="RCF--container">
      <LikeButton {...props} />
    </div>
  );
}
