function Scoreboard({ score, highscore }) {
  return (
    <div id="scoreboard">
      <span className="score">Score: {score}</span>
      <span className="score highscore">Highscore: {highscore}</span>
    </div>
  );
}

export default Scoreboard;
