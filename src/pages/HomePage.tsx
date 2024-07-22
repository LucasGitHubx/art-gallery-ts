//@ts-nocheck

import "./homePage.css";
import reviews from "../utilities/data";
import Review from "../components/Review";

// IMAGES
import whiteLogo from "../../public/logo-white.svg";
import illustration1 from "../../public/plant.svg";
import illustration2 from "../../public/bikini.svg";
import illustration3 from "../../public/dancing.svg";

export default function HomePage() {
  return (
    <div className="home-page container">
      <div className="welcome">
        <h1>Welcome to art gallery</h1>
        <img src={whiteLogo} alt="" />
      </div>

      <div className="reviews">
        {reviews.map((review) => {
          return <Review review={review} key={review.id} />;
        })}
      </div>

      <div className="illustrations-text">
        <div className="illustration-1 illustration">
          <img src={illustration1} alt="plant illustration" />
          <p>
            <i>Art gallery</i> is a place where you can post pictures and see
            what other people have uploaded. We search that every user feel
            comfortable with the website and a place where everyone can upload
            whatever they want without any constraint (see next warning).{" "}
            <strong>So RELAX.</strong>
          </p>
        </div>
        <div className="illustration-2 illustration">
          <img src={illustration2} alt="bikini illustration" />
          <p>
            Feel free to upload whatever you want, but if you post something
            nsfw, +18 or anything related to drugs, child abuse or illegal
            activities, your content will be removed. Please keep our community
            safe and respectful.
          </p>
        </div>
        <div className="illustration-3 illustration">
          <img src={illustration3} alt="dancing illustration" />
          <p>
            <strong> To get started</strong>, go to <i>/add</i> and upload your
            first picture. If you do not want to upload any picture and you just
            want to see what other users have uploaded, please go to{" "}
            <i>/gallery</i>.
          </p>
        </div>
      </div>
    </div>
  );
}
