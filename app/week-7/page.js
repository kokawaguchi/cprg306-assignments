"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // event handler to add an item to the list
  function handleAddItem(item) {
    setItems([...items, item]);
  }

  const handleItemSelect = (item) => {
    let cleanItem;
    if (item.name.includes(",")) {
      cleanItem = item.name.replace(/,.*/, "");
    } else {
      // Regular expression to match emojis
      const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
      cleanItem = item.name.replace(regexEmoji, "");
    }
    if (cleanItem) {
      setSelectedItemName(cleanItem);
    } else {
      console.error("Error: Unable to extract meal name from selected item.");
    }
  };

  return (
    <main>
      <h2 className="text-3xl ml-2 font-bold w-full pt-4">Shopping List</h2>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2 pl-5">
          {selectedItemName !== null ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p>Select an item to see meal ideas</p>
          )}
        </div>
      </div>
    </main>
  );
}
