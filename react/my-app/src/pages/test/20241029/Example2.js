import React from "react";

let guest = 0;

function Cup() {
  guest++;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function Example2() {
  return (
    <div>
      <h1>Tea Party</h1>
      <Cup />
      <Cup />
      <Cup />
    </div>
  );
}
