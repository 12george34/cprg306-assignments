"use client"

import {useEffect, useState } from "react";

async function fetchMealIdeas(ingredient: string){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json();
    return data.meals || [];
}

// interface mealIdeaProp {
//     ingredient: string
// }



export default function MealIdeas({ ingredient }: any) {
    const [meals, setMeals] = useState([])

    async function loadMealIdeas(){
        const fetchMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchMeals);
    }


    useEffect(() => {
        console.log("ingredient received:", ingredient);
        if(ingredient) loadMealIdeas();
    }, [ingredient]);


    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map((meal: any) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );

}




