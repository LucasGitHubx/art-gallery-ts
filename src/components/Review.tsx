import { IReview } from "../utilities/data";
import "./review.css";

interface Props {
  review: IReview;
}

export default function Review({ review }: Props) {
  return (
    <div className="review">
      <div className="personal-info">
        <img src={review.img} alt="" />
        <div className="text">
          <h2>{review.name}</h2>
          <p>Art Gallery's user</p>
        </div>
      </div>
      <div className="review-text">{review.review}</div>
      <p className="date">{review.date}</p>
    </div>
  );
}
