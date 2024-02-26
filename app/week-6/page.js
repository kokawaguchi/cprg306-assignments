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
    <main className="p-2 m-2 w-3/4">
      <h2 className="text-3xl font-bold">Shopping List</h2>

      <div className="max-w-sm w-full">
        <h3 className="text-xl font-bold p-1">Add New Item</h3>
        <div className="mb-2" w-full>
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="flex justify-between">
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}
