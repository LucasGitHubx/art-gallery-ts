import { app } from "./firebase";
import { Photo } from "../types";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  addDoc,
  query,
} from "firebase/firestore";

const db = getFirestore(app);
const photosCollection = collection(db, "photos");

export async function addPhoto(
  photo: Photo,
  setPosted: (val: boolean) => void
) {
  try {
    await addDoc(photosCollection, {
      ...photo,
    });
    setPosted(true);
  } catch (error: any) {
    alert(error.code);
  }
}

export async function getPhotos(
  setData: (photos: Photo[]) => void,
  setLoaded: (val: boolean) => void
) {
  const photos: Photo[] = [];
  const q = query(photosCollection);
  const data = await getDocs(q);

  data.docs.forEach((doc) => {
    photos.push({
      photoID: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      url: doc.data().url,
      description: doc.data().description,
    });
  });

  setData(photos);
  setLoaded(true);
}
