export type PhotoID = `${string}-${string}-${string}-${string}-${string}`;

export interface Photo {
  photoID: PhotoID;
  title: string;
  author: string;
  url: string;
  description: string;
}
