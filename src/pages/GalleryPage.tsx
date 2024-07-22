import { useState, useEffect } from "react";
import "./galleryPage.css";
import { Photo } from "../types";

// Database Actions
import { getPhotos } from "../firebase/firestore";
import PhotoRender from "../components/PhotoRender";

export default function GalleryPage() {
  const [data, setData] = useState<Photo[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getPhotos(setData, setLoaded);
  }, []);

  return (
    <div className="gallery-page container">
      <p>
        Welcome to the gallery, here you'll be able to see what other users have
        uploaded. Please, if you think that a photo breaks the rules, contact
        us.
      </p>

      {!loaded ? (
        <h2>Loading...</h2>
      ) : data.length === 0 ? (
        <h2>There are no photos for the moment</h2>
      ) : (
        <div className="gallery">
          {data.map((photo) => {
            return <PhotoRender photo={photo} key={photo.photoID} />;
          })}
        </div>
      )}
    </div>
  );
}
