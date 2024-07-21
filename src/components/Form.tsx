import "./form.css";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const [titleError, setTitleError] = useState<boolean>(false);
  const [authorError, setAuthorError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const titleRegex = /^.{5,20}$/;
    const authorRegex = /^.{5,20}$/;
    const descriptionRegex = /^.{5,40}$/;
    const urlRegex = /^https?:\/\/\S+\.(?:png|jpe?g|gif|webp)$/;

    const titleVerification = titleRegex.test(title);
    const authorVerification = authorRegex.test(author);
    const descriptionVerification = descriptionRegex.test(description);
    const urlVerification = urlRegex.test(url);

    if (titleVerification) {
      setTitleError(false);
    } else {
      setTitleError(true);
    }

    if (authorVerification) {
      setAuthorError(false);
    } else {
      setAuthorError(true);
    }

    if (descriptionVerification) {
      setDescriptionError(false);
    } else {
      setDescriptionError(true);
    }

    if (urlVerification) {
      setUrlError(false);
    } else {
      setUrlError(true);
    }

    if (
      titleVerification &&
      authorVerification &&
      descriptionVerification &&
      urlVerification
    ) {
      setTitle("");
      setAuthor("");
      setDescription("");
      setUrl("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={titleError ? "error" : undefined}>
        {titleError
          ? "Picture's title must be between 5-20 chars"
          : "Picture's title"}
      </label>
      <input
        className={titleError ? "error" : undefined}
        type="text"
        placeholder="E.g Romantic Dinner in france"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className={authorError ? "error" : undefined}>
        {authorError
          ? "Picture's author must be between 5-20 chars"
          : "Picture's author"}
      </label>
      <input
        className={authorError ? "error" : undefined}
        type="text"
        placeholder="E.g Michael Scott"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label className={urlError ? "error" : undefined}>
        {urlError ? "Picture's url incorrect" : "Picture's url"}
      </label>
      <input
        className={urlError ? "error" : undefined}
        type="text"
        placeholder="E.g Michael Scott"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <label className={descriptionError ? "error" : undefined}>
        {descriptionError
          ? "Picture's description must be between 5-40 chars"
          : "Picture's description"}
      </label>
      <input
        className={descriptionError ? "error" : undefined}
        type="text"
        placeholder="E.g Romantic Dinner next to the eiffel tower"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add!</button>
    </form>
  );
}
