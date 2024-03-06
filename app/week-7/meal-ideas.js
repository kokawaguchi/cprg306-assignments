"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

const fetchMealDetails = async (idMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

export default function MealIdeas({ ingredient, onSelect }) {
  const [meals, setMeals] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const loadMealIdeas = async (ingredient) => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  const handleClick = async (idMeal) => {
    setSelectedMeal(null);
    const mealDetails = await fetchMealDetails(idMeal);
    setSelectedMeal(mealDetails);
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
            {meals.map((meal) => (
              <li
                className="bg-blue-100 rounded-md m-1 h-15 text-justify p-2 text-cyan-900 hover:bg-pink-100"
                key={meal.idMeal}
                onClick={() => handleClick(meal.idMeal)}
              >
                <div>
                  <h3>{meal.strMeal}</h3>
                  {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                    <div>
                      <p>Ingredients needed:</p>
                      <ul className="ml-5">
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(
                          (index) => {
                            const ingredientName =
                              selectedMeal[`strIngredient${index}`];
                            const measure = selectedMeal[`strMeasure${index}`];
                            if (
                              ingredientName &&
                              ingredientName.trim() !== ""
                            ) {
                              return (
                                <li key={index}>
                                  {ingredientName} - ({measure})
                                </li>
                              );
                            }
                            return null;
                          }
                        )}
                      </ul>
                    </div>
                  )}
                </div>
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
