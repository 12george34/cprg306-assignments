"use client"


import Items from "./item";
import { useState } from "react";
import items from "./items.json";


export default function ItemList() {
  const [sortBy, setSortBy] = useState("name")

  let sortThings = [...items];


  if(sortBy === "name") {
    sortThings.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortThings.sort((a, b) => a.category.localeCompare(b.category));
  }




    return (
      <div style={{padding: "20px"}}>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",}}>
        <button onClick={() => setSortBy("name")}
          style={{backgroundColor: sortBy === "name" ? "blue" : "red",
            borderRadius: 2,
            fontSize: 25,
            display: "flex",
            justifyContent: "center",
            


          }}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")}
          style={{backgroundColor: sortBy === "category" ? "blue" : "red",
            borderRadius: 2,
            fontSize: 25,
            display: "flex",
            justifyContent: "center",
            

          }}>
          Sort by Category
        </button>
      </div>


        <ul style={{display: "flex", flexDirection: "column"}}>
          {sortThings.map((item, index) => (
          <Items
          key={index} 
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          />
          ))}
        </ul>
      </div>        
    );
}

