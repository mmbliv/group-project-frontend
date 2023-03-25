import GroceriesItem from "./Components/GroceriesItem";
import { useLoaderData } from "react-router-dom";
import React from "react";

export default function Groceries() {
  const groceriesData = useLoaderData();
  //   console.log(groceriesData);
  return (
    <div>
      {groceriesData.map((d) => {
        return <GroceriesItem key={d._id} data={d} />;
      })}
    </div>
  );
}
