import { useState } from "react";

export default function Toggle() {
  const [isOn, setOn] = useState(false);

  return (
    <button
      onClick={() => {
        setOn(!isOn);
      }}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}
