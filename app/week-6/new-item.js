"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function onNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newID = Math.floor(Math.random() * 1000000);
    const newItem = { id: newID, name, quantity, category };
    onAddItem(newItem);

    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  return (
    <main className="">
      <form
        onSubmit={handleSubmit}
        className="p-2 m-1 ml-4 bg-slate-900 text-black max-w-sm w-full"
      >
        <div className="mb-2">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onNameChange}
            className="text-black w-full mt-1 border-2 border-gray-300 
          p-2 rounded-lg font-sans justify-center"
            placeholder="Item name"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            className="text-black w-20 m1-1 border-2 border-gray-300
            p-2 rounded-lg font-sans justify-center"
          />
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="text-black m1-1 border-2 border-gray-300 
            p-2 rounded-lg font-sans"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="meat">Meat</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="dry goods">Dry Goods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-0
          bg-blue-500 text-white font-semibold rounded-lg"
        >
          +
        </button>
      </form>
    </main>
  );
}

//  Demo code:
// https://github.com/warsylewicz/webdev2-demos/blob/master/app/week-4/dog-form.js
