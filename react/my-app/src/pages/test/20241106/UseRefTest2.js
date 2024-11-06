import { useRef, useState } from "react";

export default function UseRefTest2() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timeoutID = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
      <input disabled={isSending} value={text} onChange={(e) => setText(e.target.value)} />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}
