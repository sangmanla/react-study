import { useEffect, useState } from "react";

const initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}

export default function Example7() {
  let [stories] = useState([...initialStories]);
  let time = useTime();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
