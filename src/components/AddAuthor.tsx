"use client";

import pb from "@/lib/pocketbase";
import { useState } from "react";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");
  const [disabled, setDisabled] = useState(false);

  const authorChange = (e: any) => {
    setAuthor(e.target.value);
  };

  const addAuthor = async () => {
    if (!pb.authStore.model) return alert("Not logged in!");
    if (author === "") return alert("Author name can't be empty!");

    setDisabled(true);

    try {
      const data = {
        name: author,
        user: pb.authStore.model.id,
      };

      const result = await pb.collection("atay_authors").create(data);
    } catch (e) {
      alert(e);
    } finally {
      setAuthor("");
      setDisabled(false);
    }
  };

  return (
    <>
      <h2>Add new author</h2>
      <input
        disabled={disabled}
        placeholder="author name"
        onChange={authorChange}
        value={author}
      />
      <button disabled={disabled} onClick={addAuthor}>
        Add author
      </button>
    </>
  );
};

export default AddAuthor;
