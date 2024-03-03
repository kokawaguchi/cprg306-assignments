"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (ingredient) => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl ml-2 font-bold w-full pt-4">Meal Ideas</h2>
      <div className="">
        <div>
          {meals ? (
            <p>Here are some meal ideas using {ingredient}</p>
          ) : (
            <p>No meal ideas found for {ingredient}</p>
          )}
        </div>
        {meals ? (
          <ul>
            {meals.map((ingredient) => (
              <li key={ingredient.idMeal}>{ingredient.strMeal}</li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
