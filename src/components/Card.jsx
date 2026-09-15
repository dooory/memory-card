function Card({ onClick, name, image }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
