import React from "react";
import { useParams } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const params = useParams();
  console.log(params);
  return (
    <div className="from--container">
      <form></form>
    </div>
  );
}
