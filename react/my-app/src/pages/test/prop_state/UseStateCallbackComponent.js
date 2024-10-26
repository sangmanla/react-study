import React from "react";

const UseStateCallbackComponent = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <div>
      <h1>useState Callback Component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseStateCallbackComponent;
