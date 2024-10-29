import { people } from "./data.js";
import { getImageUrl } from "../prop_state/utils.js";

function ListItem({ title, listItems }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {listItems.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person.imageId)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  const chemistries = people.filter(
    (person) => person.profession === "chemist"
  );
  const rest = people.filter((person) => person.profession !== "chemist");

  return (
    <article>
      <ListItem title={"Chemistry"} listItems={chemistries}></ListItem>
      <ListItem title={"Everyone Else"} listItems={rest}></ListItem>
    </article>
  );
}
