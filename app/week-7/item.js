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

import { useState } from "react";

//TODO - when the div is clicked, change background colour to yellow,
// prev background colour should revert to blue

export default function Item({ name, quantity, category, onSelect }) {
  const [divColour, setDivColour] = useState("bg-blue-900");

  const handleClick = () => {
    setDivColour("yellow");
    onSelect && onSelect();
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-${divColour} hover:bg-blue-100 p-2 rounded-md mb-2 max-w-sm w-full bg-blue-900`}
      style={{ transition: "background-color 0.3s" }} // Add transition for smooth effect
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
