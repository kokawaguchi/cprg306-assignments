import { useState } from "react";

export default function Item({ name, quantity, category, onSelect }) {
  const [divColour, setDivColour] = useState("bg-blue-900");

  const handleClick = () => {
    setDivColour("yellow");
    onSelect && onSelect();
  };

  return (
    <div
      onClick={handleClick}
      className=" hover:bg-blue-100 p-2 rounded-md mb-2 max-w-sm w-full bg-blue-900"
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
