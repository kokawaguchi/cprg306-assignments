"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  async function loadItems() {
    const userItems = await getItems(user.uid);
    setItems(userItems);
  }

  // event handler to add an item to the list
  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);
    setItems((prevItems) => [...prevItems, { id, ...item }]);
  }

  const handleItemSelect = (item) => {
    let cleanItem;
    if (item.name.includes(",")) {
      cleanItem = item.name.replace(/,.*/, "");
    } else {
      cleanItem = item.name.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    }
    if (cleanItem) {
      setSelectedItemName(cleanItem);
    } else {
      console.error("Error: Unable to extract meal name from selected item.");
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

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
