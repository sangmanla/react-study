import { useState } from "react";
import { getImageUrl } from "../prop_state/utils.js";

export default function Example6() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}

function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}

function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
