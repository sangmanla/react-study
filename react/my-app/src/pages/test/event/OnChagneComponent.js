import React, { useState } from "react";

function InputEventTestComponent() {
  const [input, setInput] = useState("");
  const [eventLog, setEventLog] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const logEventType = (event) => {
    setEventLog((prev) => [event.type, ...prev]);
  };

  return (
    <div>
      <h1>Input Event Test Component</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onFocus={logEventType}
        onKeyDown={logEventType}
        onKeyUp={logEventType}
        onInput={logEventType}
        onDoubleClick={logEventType}
        onMouseDown={logEventType}
        onMouseUp={logEventType}
        onMouseEnter={logEventType}
        onMouseLeave={logEventType}
        onMouseMove={logEventType}
        onMouseOver={logEventType}
      />
      <p>Input: {input}</p>
      <p>Event Log:</p>
      <ul>
        {eventLog.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputEventTestComponent;
