import { getImageUrl } from "./utils.js";

const profiles = [
  {
    name: "Maria Skłodowska-Curie",
    imageUrl: "szV5sdG",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    imageUrl: "YfeOqp2",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "a method for measuring carbon dioxide in seawater",
  },
];

function Profile({ profile }) {
  return (
    <>
      <section className="profile">
        <h2>{profile.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(profile.imageUrl)}
          alt={profile.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: {profile.awards.length} </b>({profile.awards.join(", ")})
          </li>
          <li>
            <b>Discovered: </b>
            {profile.discovered}
          </li>
        </ul>
      </section>
    </>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile profile={profiles[0]} />
      <Profile profile={profiles[1]} />
    </div>
  );
}
