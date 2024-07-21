import Form from "../components/Form";
import "./addPhotoPage.css";

export default function AddPhoto() {
  return (
    <div className="add-photo-page container">
      <div className="warning-addphoto">
        <p>Before you uploade your image, you must know these three rules:</p>
        <ol>
          <li>
            <strong>No illegal, NSFW, or +18 content</strong>: Photos containing
            illegal activities, explicit nudity, or adult content will be
            promptly deleted.
          </li>
          <li>
            <strong>Respect Copyright</strong>: Only upload photos that you own
            or have permission to use.
          </li>
          <li>
            <strong>No Offensive or Harmful Content</strong>: Ensure uploaded
            photos do not contain offensive material or pose harm to others.
          </li>
        </ol>
      </div>

      <Form />
    </div>
  );
}

/* 
Before you uploade your image, you must know these
three rules: 

No Illegal, NSFW, or +18 Content: Photos containing illegal activities, explicit nudity, or adult content will be promptly deleted.
Respect Copyright: Only upload photos that you own or have permission to use.
No Offensive or Harmful Content: Ensure uploaded photos do not contain offensive material or pose harm to others.
*/
