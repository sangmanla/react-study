import { useState } from "react";
import { useImmer } from "use-immer";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function ArrayImmutableWithImmer() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    // updateList(
    //   list.map((artwork) => {
    //     if (artwork.id === artworkId) {
    //       return { ...artwork, seen: nextSeen };
    //     } else {
    //       return artwork;
    //     }
    //   })
    // );
    updateList((draft) => {
      draft.find((a) => a.id === artworkId).seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title} - {artwork.seen ? "Seen" : "Not seen"}
          </label>
        </li>
      ))}
    </ul>
  );
}
