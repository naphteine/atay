"use client";

import pb from "@/lib/pocketbase";
import { useState } from "react";

const AddPublisher = () => {
  const [publisher, setPublisher] = useState("");
  const [disabled, setDisabled] = useState(false);

  const publisherChange = (e: any) => {
    setPublisher(e.target.value);
  };

  const addPublisher = async () => {
    if (!pb.authStore.model) return alert("Not logged in!");
    if (publisher === "") return alert("Publisher name can't be empty!");

    setDisabled(true);

    try {
      const data = {
        name: publisher.trim(),
        user: pb.authStore.model.id,
      };

      const result = await pb.collection("bookPublishers").create(data);
    } catch (e) {
      alert(e);
    } finally {
      setPublisher("");
      setDisabled(false);
    }
  };

  return (
    <>
      <h2>Add new publisher</h2>
      <input
        disabled={disabled}
        placeholder="publisher name"
        onChange={publisherChange}
        value={publisher}
      />
      <button disabled={disabled} onClick={addPublisher}>
        Add publisher
      </button>
    </>
  );
};

export default AddPublisher;
