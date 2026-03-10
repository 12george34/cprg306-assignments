"use client"


import Items from "./item";
import { useState } from "react";

type ItemProps = {
  id: string;
  name: string;
  quantity: number;
  category: string;
  onSelect?: () => void;
};

type ItemListProps = {
  items: ItemProps[];
  onItemSelect: (item: any) => void;
}

export default function ItemList({items, onItemSelect}: ItemListProps) {
  const [sortBy, setSortBy] = useState<"name" | "category">("name");

  const sortThings = sortBy === "name" 
    ? [...items].sort((a, b) => a.name.localeCompare(b.name)) 
    : [...items].sort((a, b) => a.category.localeCompare(b.category));
  




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
          {sortThings.map((item) => (
            <div key={item.id} onClick={() => onItemSelect(item.name)}>
              <Items
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            />
          </div>
          
          ))}
        </ul>
      </div>        
    );
}

