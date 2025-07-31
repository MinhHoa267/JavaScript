import { useState } from "react";

const GameComponent2 = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza(pizzaCu => ({
      ...pizzaCu,
      toppings: [...pizzaCu.toppings, "Cheese"],
    }));
  };

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Toppings:</p>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Thêm Cheese</button>
    </div>
  );
};

export default GameComponent2;