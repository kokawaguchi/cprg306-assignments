// export default function Item({ name, quantity, category, onSelect }) {
//   return (
//     <div
//       className="p-2 rounded-md mb-2 max-w-sm w-full bg-blue-900"
//       onClick={onSelect}
//     >
//       <h3 className="text-xl font-bold">{name}</h3>
//       <p className="text-sm">
//         Buy {quantity} in {category}
//       </p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Item({ id, name, quantity, category, onSelect }) {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [prevSelectedItemId, setPrevSelectedItemId] = useState(null);

  const handleClick = (event) => {
    const clickedItemId = event.currentTarget.id;
    setSelectedItemId(selectedItemId === clickedItemId ? null : clickedItemId);
    onSelect && onSelect();
  };

  useEffect(() => {
    // Revert the previously selected item's background color to green
    if (prevSelectedItemId !== null && prevSelectedItemId !== selectedItemId) {
      const prevSelectedElement = document.getElementById(prevSelectedItemId);
      if (prevSelectedElement) {
        prevSelectedElement.style.backgroundColor = "green";
      }
    }
    // Update the previously selected item ID
    setPrevSelectedItemId(selectedItemId);
  }, [selectedItemId]);

  return (
    <div
      id={id}
      className="p-2 rounded-md mb-2 max-w-sm w-full"
      style={{ backgroundColor: selectedItemId === id ? "red" : "green" }}
      onClick={handleClick}
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
