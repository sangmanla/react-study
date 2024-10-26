import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/counterReducer";

const ReduxComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxComponent;
