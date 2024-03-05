"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient, onSelect }) {
  const [meals, setMeals] = useState(null);

  const loadMealIdeas = async (ingredient) => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  const handleClick = () => {
    setDivColour("yellow");
    onSelect && onSelect();
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold w-full pt-4">Meal Ideas</h2>
      <div>
        <div>
          {ingredient ? (
            meals !== null ? (
              <p>Here are some meal ideas using {ingredient}:</p>
            ) : (
              <p>No meal ideas found for {ingredient}</p>
            )
          ) : (
            <p>Select an item to see meal ideas</p>
          )}
        </div>
        {meals ? (
          <ul>
            {meals.map((ingredient) => (
              <li
                className="bg-blue-100 rounded-md m-1 h-15 text-justify p-2 text-cyan-900 hover:bg-pink-100"
                key={ingredient.idMeal}
              >
                {ingredient.strMeal}
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
