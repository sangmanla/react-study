export default function Clock() {
  const time = new Date();
  let className = "day";
  let hours = time.getHours();
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
