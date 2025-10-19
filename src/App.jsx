
import './App.css'

import GreetingCard from './Components/GreetingCards'

function App() {
  const cardsData = [
    { name: "Mahi", message: "Have a wonderful day", color: "#4CAF50" },
    { name: "Ravi", message: "Keep smiling always", color: "#2196F3" },
    { name: "Vamsi", message: "You’re doing great", color: "#FF5722" }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {cardsData.map((card) => (
        <GreetingCard
          name={card.name}
          message={card.message}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default App;
