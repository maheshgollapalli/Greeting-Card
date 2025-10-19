
function GreetingCard({ name, message, color }) {
  const cardStyle = {
    backgroundColor: color,
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}</h2>
      <p>{message}</p>
    </div>
  );
}

export default GreetingCard;
