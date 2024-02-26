"use client";

import DogForm from "./dog-form.js";
import DogList from "./dog-list.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  // addDog to json array (shallow copy)
  const addDog = (dog) => {
    setDogs([...dogs, dog]);
    // the spread operator ... creates a new array with the new dog added
  };

  // cant mutate the array, create a new array excluding deleted dog
  const deleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  // dog needs to be available to dog-form.js and dog-list.js
  // pass addDog to DogForm as a prop
  return (
    <div>
      <h1>Week 6</h1>
      <h2>Manage Dogs</h2>
      <DogList dogs={dogs} onDelete={deleteDog} />
      <DogForm onAddDog={addDog} />
    </div>
  );
}

// ** DEMO FOR COUNTER **
// import Counter from "./counter.js";

// export default function Page() {
//   return (
//     <div>
//       <h2>Week 6</h2>
//       <Counter />
//     </div>
//   );
// }
