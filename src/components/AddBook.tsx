"use client";

import pb from "@/lib/pocketbase";
import { ChangeEvent, useState } from "react";

interface bookObject {
  name: string;
  isbn: string;
  pages: number;
  cover: File | null;
  user_id: string;
}

const AddBook = () => {
  const [book, setBook] = useState<bookObject>({
    name: "",
    isbn: "",
    pages: 0,
    cover: null,
    user_id: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pages" && +e.target.value < 0)
      return alert("Book pages can't be negative!");

    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    if (book.name === "") return alert("Book name can't be empty!");
    if (!pb.authStore?.model?.id) return alert("You are not logged in!");

    const result = await pb
      .collection("atay_books")
      .create({ ...book, user_id: pb.authStore.model.id });

    setBook({ name: "", isbn: "", pages: 0, cover: null, user_id: "" });
  };

  return (
    <>
      <h2>Add new book</h2>
      <input
        placeholder="book name"
        name="name"
        type="text"
        onChange={handleChange}
        value={book.name}
      />
      <input
        placeholder="isbn"
        name="isbn"
        type="text"
        onChange={handleChange}
        value={book.isbn}
      />
      <input
        placeholder="page count"
        name="pages"
        type="number"
        onChange={handleChange}
        value={book.pages}
      />
      <input type="file" name="cover" onChange={handleChange} />
      <button onClick={addBook}>Add book</button>
    </>
  );
};

export default AddBook;
