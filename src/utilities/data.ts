export interface IReview {
  id: string;
  img: string;
  name: string;
  review: string;
  date: string;
}

const reviews: IReview[] = [
  {
    id: crypto.randomUUID(),
    img: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jack Scott",
    review:
      "Impressive platform! It's so easy to upload and explore creative works. The variety here is inspiring, from photos to art pieces. Great job on keeping it user-friendly!",
    date: "Mar, 2024",
  },
  {
    id: crypto.randomUUID(),
    img: "https://images.unsplash.com/photo-1687360440648-ec9708d52086?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Parker",
    review:
      "As an artist, I appreciate the simplicity and accessibility. It's refreshing to share my work without fuss. A wonderful community for creativity!",
    date: "Apr, 2024",
  },
  {
    id: crypto.randomUUID(),
    img: "https://images.unsplash.com/photo-1680710254589-c61565d41bdd?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Liam Johnson",
    review:
      "Awesome concept! Being able to browse through different styles and talents without signing up is a huge plus. Definitely bookmarking this site!",
    date: "May, 2024",
  },
];

export default reviews;
