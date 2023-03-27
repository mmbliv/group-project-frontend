import GroceriesItem from "./Components/GroceriesItem";
import { useLoaderData, useBeforeUnload } from "react-router-dom";
import "./Groceries.css";
import React from "react";

export default function Groceries() {
  const groceriesData = useLoaderData();
  useBeforeUnload(
    React.useCallback(() => {
      console.log("huhu");
      // const body = {};
      // body.checked = checkStatus;
      // body.deleted = deleteStatus;
      // const reqOptions = {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // };
      // fetch(`http://localhost:4000/groceries/${_id}`, reqOptions)
      //   .then((res) => res.json())
      //   .then((d) => console.log(d));
    }, [])
  );
  //   console.log(groceriesData);
  return (
    <div className="groceriesItems--container">
      {groceriesData.map((d) => {
        return <GroceriesItem key={d._id} data={d} />;
      })}
    </div>
  );
}
