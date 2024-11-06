import { useRef } from "react";

function DebouncedButton({ onClick, children }) {
  const timeoutID = useRef(null);
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function UseRefTest4() {
  return (
    <>
      <DebouncedButton onClick={() => alert("Spaceship launched!")}>Launch the spaceship</DebouncedButton>
      <DebouncedButton onClick={() => alert("Soup boiled!")}>Boil the soup</DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby sung!")}>Sing a lullaby</DebouncedButton>
    </>
  );
}
