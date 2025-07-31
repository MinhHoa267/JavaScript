// ./Btap/ex1.js
import { useState } from "react";

const GameComponent = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Donald Trump",
    },
  });

  const handleClick = () => {
    setGame(gameCu => ({
      ...gameCu,
      player: {
        ...gameCu.player,
        name: "Joe Biden",
      },
    }));
  };

  return (
    <div>
      <p>Tên người chơi: {game.player.name}</p>
      <button onClick={handleClick}>Đổi tên</button>
    </div>
  );
};

export default GameComponent;