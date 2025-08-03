export default function RandomColorWords({ text, color }) {
  return (
    <span style={{ color: color, fontWeight: "bold" }}>
      {text}
    </span>
  );
}
