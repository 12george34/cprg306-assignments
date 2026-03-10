"use client"

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items"
import { useState } from "react"


export default function Page() {
    const [items, setItems] = useState(itemsData);
    
    function handleAddItem(newItem: any) {
        setItems([...items, newItem]);
    }
    
    
    
    
    return <main>
        <div style={{backgroundColor: "black"}}>
        <h1 className="flex items-center justify-center text-pink-500"
        style={{fontSize: "25px"}}>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        
        </div>

    </main>
}