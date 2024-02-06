"use client";

import Item from "./item.js";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortItemsByName = (items) => {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  };

  const sortItemsByCategory = (items) => {
    return items.sort((a, b) => a.category.localeCompare(b.category));
  };

  let sortedItems = [];
  if (sortBy === "name") {
    sortedItems = sortItemsByName(itemsData);
  }
  if (sortBy === "category") {
    sortedItems = sortItemsByCategory(itemsData);
  }

  return (
    <div>
      <p>
        Sort by:
        <button
          className={sortBy === "name" ? "bg-orange-500" : "bg-orange-900"}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={sortBy === "category" ? "bg-orange-500" : "bg-orange-900"}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </p>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
