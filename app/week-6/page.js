"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  //initialize state variable with data from items.json
  const [items, setItems] = useState(itemsData);

  // event handler to add an item to the list
  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <main>
      <h2 className="text-3xl ml-4 font-bold w-full pt-4">Shopping List</h2>

      <h3 className="text-xl font-bold p-1 ml-4 mt-5">Add New Item</h3>
      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}
