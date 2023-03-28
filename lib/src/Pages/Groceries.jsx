import GroceriesItem from "./Components/GroceriesItem";
import { useLoaderData } from "react-router-dom";
import "./Groceries.css";
import React from "react";

export default function Groceries() {
  const groceriesData = useLoaderData();

  return (
    <div className="groceriesItems--container">
      {groceriesData.map((d) => {
        console.log(d.recipe.name);
        return <GroceriesItem key={d._id} data={d} />;
        
      })}
      <button
        onClick={() => window.location.reload(true)}
        className="groceriesItems--submit"
      >
        submit
      </button>
    </div>
  );
}
