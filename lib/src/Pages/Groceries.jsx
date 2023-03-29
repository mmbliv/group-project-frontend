import GroceriesItem from "./Components/GroceriesItem";
import { useLoaderData } from "react-router-dom";
import "./Groceries.css";
import React from "react";

export default function Groceries() {
  const groceriesData = useLoaderData();

  return (
    <div className="groceriesItems--container">
      <div className="groceriesItem--title__container">
        <p className="groceriesItem--title">Grocery List</p>
      </div>
      {groceriesData.map((d) => {
        return <GroceriesItem key={d._id} data={d} />;
        
      })}
    </div>
  );
}
