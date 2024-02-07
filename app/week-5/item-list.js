"use client";

import Item from "./item.js";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = itemsData.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <p>
        Sort by:
        <button
          onClick={() => setSortBy("name")}
          className={`bg-${sortBy === "name" ? "blue-500" : "blue-900"} p-1 m-2 w-20 text-black rounded-md`}
        >
          Name
        </button>
        <button
           onClick={() => setSortBy("category")}
           className={`bg-${sortBy === "category" ? "blue-500" : "blue-900"} p-1 m-2 w-20 text-black rounded-md`}
        >
          Category
        </button>
      </p>
      <ul>
        {sortItems.map((item) => (
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
