"use client";

import pb from "@/lib/pocketbase";
import { useState } from "react";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");

  const authorChange = (e: any) => {
    setAuthor(e.target.value);
  };

  const addAuthor = async () => {
    if (!pb.authStore.model) return alert("Not logged in!");

    try {
      const result = await pb
        .collection("atay_authors")
        .create([{ name: author, user: pb.authStore.model.id }]);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <h2>Add new author</h2>
      <input placeholder="author name" onChange={authorChange} value={author} />
      <button onClick={addAuthor}>Add author</button>
    </>
  );
};

export default AddAuthor;
