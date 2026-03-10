"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [nameTouched, setNameTouched] = useState(false);
    const isFormed = name.trim().length >= 2 && quantity >= 1 && quantity <= 99 && category;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setNameTouched(true);

        if (!name || name.trim().length < 2) {
            alert("Please enter a valid name with at least 2 characters.");
            return;
        }


        const item = {
            name,
            quantity,
            category,
        };


        console.log(item);

        alert(`Name: ${name}\n Quantity: ${quantity} \n Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
        setNameTouched(false);





    }


    return (
    <form onSubmit={handleSubmit}>

        <div className="mb-4">
       <input  
       type="text" 
       value={name} 
       onChange={(e) => setName(e.target.value)} 
       required placeholder="Enter name"
        onBlur={() => setNameTouched(true)}  
        className={nameTouched && name.trim() === "" ? "border border-red-500" : ""} />
        
        {nameTouched && name.trim() === "" && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
        )}



        </div>
        <p></p>

        <div className="border border-2 border-green-600 justify-center align-center w-17">
        <input type="number" 
        min={1} 
        max={99} 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))} 
        required 
        placeholder="Enter Quantity"/>
        </div>
       
        <p></p>

        <div className="border border-2 border-green-600 justify-center align-center w-43">
        <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required> 

        <option value={"Produce"}>Produce</option>
        <option value={"Dairy"}>Dairy</option>
        <option value={"Bakery"}>Bakery</option>
        <option value={"Meat"}>Meat</option>
        <option value={"Frozen Foods"}>Frozen Foods</option>
        <option value={"Canned Goods"}>Canned Goods</option>
        <option value={"Dry Goods"}>Dry Goods</option>
        <option value={"Beverages"}>Beverages</option>
        <option value={"Snacks"}>Snacks</option>
        <option value={"Household Supplies"}>Household Supplies</option>
        <option value={"Other"}>Other</option>
        </select>
        </div>
        
        <p></p>

        <div className="border 
        border-2 
        border-green-600 
        justify-center 
        align-center w-24">
        <button type="submit"
        disabled={!isFormed}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">Submit</button> 
        </div>

    </form>

    
    );
}

