import GroceriesItem from "./Components/GroceriesItem";
import { useLoaderData } from "react-router-dom";
import "./Groceries.css";
import React from "react";

export default function Groceries() {
  const groceriesData = useLoaderData();
  //   console.log(groceriesData);
  return (
    <div className="groceriesItems--container">
      {groceriesData.map((d) => {
        return <GroceriesItem key={d._id} data={d} />;
      })}
    </div>
  );
}
