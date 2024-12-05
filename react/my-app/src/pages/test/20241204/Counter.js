import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(count);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleSetCount = () => {
    setCount(inputValue);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSetCount}>Set</button>
    </div>
  );
}

export default Counter;
