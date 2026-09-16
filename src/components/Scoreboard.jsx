import "../styles/Scoreboard.css";

function Score({ score, title }) {
  return (
    <span className="score">
      <strong>
        {title}: {score}
      </strong>
    </span>
  );
}

function Scoreboard({ score, highscore }) {
  return (
    <div id="scoreboard">
      <Score score={score} title="Score" />
      <Score score={highscore} title="Highscore" />
    </div>
  );
}

export default Scoreboard;
