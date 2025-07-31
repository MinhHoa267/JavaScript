import { useState } from "react";

const GameComponent3 = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "T-Shirt", quantity: 1 },
      { id: 2, title: "Jeans", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart(cartCu => ({
      ...cartCu,
      items: cartCu.items.map(item =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.title} - Số lượng: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Giảm giá: {cart.discount * 100}%</p>
      <button onClick={handleClick}>Tăng số lượng T-Shirt</button>
    </div>
  );
};

export default GameComponent3;