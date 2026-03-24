"use client"

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);

    // Load items when user is ready
    useEffect(() => {
        if (!user) {
            router.push("/week-8");
            return;
        }

        const fetchItems = async () => {
            try {
                const data = await getItems(user.uid);
                setItems(data);
            } catch (error) {
                console.error("Error loading shopping list:", error);
            }
        };

        fetchItems();
    }, [user]);

    // Add item to Firestore
    const handleAddItem = async (newItem) => {
        try {
            const id = await addItem(user.uid, newItem);
            setItems([...items, { ...newItem, id }]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Handle selecting an item
    const handleItemSelect = (item) => {
        const cleaned = item.split(",")[0].replace(/[^\w\s]/g, "").trim();
        setSelectedItemName(cleaned);
        console.log("item clicked:", item);
    };

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </main>
    );
}