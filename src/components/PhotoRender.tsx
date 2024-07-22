import "./photoRender.css";
import { Photo } from "../types";
import { useState } from "react";

interface Props {
  photo: Photo;
}

export default function PhotoRender({ photo }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="photo">
      <img src={photo.url} alt={photo.title} />
      <div className="information">
        <h3>{photo.title}</h3>
        <p>by {photo.author}</p>
      </div>

      <button onClick={() => setVisible(true)}>See description</button>

      {visible ? (
        <div className="description">
          <p>{photo.description}</p>
          <button onClick={() => setVisible(false)}>
            Hide description
          </button>{" "}
        </div>
      ) : undefined}
    </div>
  );
}
