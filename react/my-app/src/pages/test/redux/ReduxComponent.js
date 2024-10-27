import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/counterReducer";
import { addIndex, addText, subIndex } from "./reducers/myReduxTestReducer";

const ReduxComponent = () => {
  const count = useSelector((state) => state.counter.count);
  const index = useSelector((state) => state.myReduxTest.index);
  const text = useSelector((state) => state.myReduxTest.text);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div className="row">
        <div className="col-12">
          <h2>Redux Test</h2>
          <p>Index: {index}</p>
          <p>Text: {text}</p>
          <button onClick={() => dispatch(addIndex())}>Add Index</button>
          <button onClick={() => dispatch(subIndex())}>Sub Index</button>
          <button onClick={() => dispatch(addText("Hello, Redux!"))}>
            Add Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReduxComponent;
