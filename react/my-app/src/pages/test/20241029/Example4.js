import React from "react";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function Example4() {
  let cups = [];
  for (let i = 1; i <= 6; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
