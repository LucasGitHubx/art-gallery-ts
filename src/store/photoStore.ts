import { Photo } from "../types";
import { create } from "zustand";

interface State {
  photos: Photo[];
  addPhoto: (photo: Photo) => void;
}

export const usePhotoStore = create<State>((set) => ({
  photos: [],
  addPhoto: (photo) =>
    set((state) => ({
      photos: [photo, ...state.photos],
    })),
}));
