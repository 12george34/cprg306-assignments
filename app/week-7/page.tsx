"use client"

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items"
import { useState } from "react"
import MealIdeas from "./meal-ideas"



export default function Page() {
    const [items, setItems] = useState(itemsData());
    const [selectedItemName, setSelectedItemName] = useState(null);
    
    
    function handleAddItem(newItem: any) {
        setItems([...items, {...newItem, id: crypto.randomUUID() }]);
    }
    
    function handleItemSelect(item:any){
        const cleaned = item.split(",")[0].replace(/[^\w\s]/g, "").trim();
        setSelectedItemName(cleaned);
        console.log("item clicked: ", item)
    }
    
    
    
    return <main>
        <div style={{backgroundColor: "black"}}>
            <h1 className="flex items-center justify-center text-pink-500"
            style={{fontSize: "25px"}}>
                Shopping List
            </h1>

            <div className="flex flex-column justify-center">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
            
        
        </div>

    </main>
}