import "../styles/Card.css";

import { useEffect, useState } from "react";

import { fetchItemImage } from "../api/Items";

function Card({ onClick, name, id }) {
  const [image, setImage] = useState();

  useEffect(() => {
    async function loadImage() {
      const blob = await fetchItemImage(id);

      setImage(URL.createObjectURL(await blob));
    }

    loadImage();
  }, []);

  return (
    <div className="card" onClick={onClick}>
      <div className="image">
        {!image ? "Loading image" : <img src={image} alt={name} />}
      </div>
      <p>
        <strong>{name}</strong>
      </p>
    </div>
  );
}

export default Card;
