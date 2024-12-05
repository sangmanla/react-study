import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [increament, setIncreament] = useState(1);
  const intervalRef = React.useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + increament);
    }, 1000);

    // Cleanup
    return () => clearInterval(intervalRef.current);
  }, [increament]);

  useEffect(() => {
    if (seconds >= 10) {
      console.log("seconds", seconds, "st");
      clearInterval(intervalRef.current);
    }
  }, [seconds]);

  return (
    <>
      <p>Time passed: {seconds} seconds</p>
      <button onClick={() => setIncreament(0)}>Pause</button>
      <button onClick={() => setIncreament(1)}>Resume</button>
    </>
  );
}

export default Timer;
