import { app } from "./firebase";
import { Photo } from "../types";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  addDoc,
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
