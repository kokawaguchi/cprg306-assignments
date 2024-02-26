"use client";

import { useState } from "react";

export default function Counter() {
  //const an array of count, setCount
  const [count, setCount] = useState(0);

  const increment = () => {
    // count++; **this is bad, can't re-render the component, need to use setCount
    // setCount(count + 1);  // setCount(1)
    // setCount(count + 1);  // setCount(1) setCount is asynchronous, will not update the count immediately

    // update count using function (value of count put into function)
    setCount((prev) => prev + 1); // setCount(1)
    setCount((prev) => prev + 1); // setCount(2)
  };

  return (
    <main>
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </main>
  );
}
