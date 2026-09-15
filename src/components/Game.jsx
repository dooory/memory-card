import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Card from "./Card";

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function Game({ items }) {
  const [clickedCards, setClickedCards] = useState([]);

  const score = clickedCards.length;
  const [highscore, setHighscore] = useState(0);

  const shuffledItemIds = shuffle(Object.keys(items));

  function restart() {
    if (score > highscore) {
      setHighscore(score);
    }

    setClickedCards([]);
  }

  function addClickedCard(id) {
    if (clickedCards.includes(id)) {
      restart();

      return;
    }

    const clickedClone = [...clickedCards];

    clickedClone.push(id);

    setClickedCards(clickedClone);
  }

  return (
    <main id="game">
      <header>
        <div className="title">
          <h1>Minecraft Memory Card</h1>
        </div>

        <Scoreboard score={score} highscore={highscore}></Scoreboard>
      </header>

      <div id="gameBoard">
        {shuffledItemIds.map((id) => {
          const { name, image } = items[id];

          return (
            <Card
              onClick={() => addClickedCard(id)}
              key={id}
              name={name}
              image={image}
            ></Card>
          );
        })}
      </div>
    </main>
  );
}

export default Game;
