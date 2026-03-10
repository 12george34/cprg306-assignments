"use client";

import { useState } from "react";

export default function NewItem({onAddItem}: any) {   
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

        onAddItem(item);

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

        <option value={"produce"}>Produce</option>
        <option value={"dairy"}>Dairy</option>
        <option value={"bakery"}>Bakery</option>
        <option value={"meat"}>Meat</option>
        <option value={"frozen foods"}>Frozen Foods</option>
        <option value={"canned goods"}>Canned Goods</option>
        <option value={"dry goods"}>Dry Goods</option>
        <option value={"beverages"}>Beverages</option>
        <option value={"snacks"}>Snacks</option>
        <option value={"household supplies"}>Household Supplies</option>
        <option value={"other"}>Other</option>
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

