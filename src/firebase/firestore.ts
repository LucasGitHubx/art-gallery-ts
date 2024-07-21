import { app } from "./firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getFirestore,
  getDoc,
} from "firebase/firestore";

const db = getFirestore(app);
const photosCollection = collection(db, "photos");

export async function getPhotos() {}
