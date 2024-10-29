import React from "react";
import { people } from "./data";
import { getImageUrl } from "../prop_state/utils";

export default function UlLiTest() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <h2>{person.name}</h2>
      <p>{person.profession}</p>
      <p>{person.accomplishment}</p>
      <img src={getImageUrl(person.imageId)} alt={person.name} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
