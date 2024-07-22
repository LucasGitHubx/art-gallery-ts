import { useState } from "react";
import "./galleryPage.css";
import { Photo } from "../types";

export default function GalleryPage() {
  const [data, setData] = useState<Photo[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  return;
}
