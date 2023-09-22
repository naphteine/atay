"use client";

import { TextField, Button } from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";
import pb from "@/lib/pocketbase";

const New = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    bookAuthor: "",
    bookISBN: "",
    bookPage: 0,
    bookCover: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prevData) => ({
      ...prevData,
      bookCover: file || null,
    }));
  };

  const newBookSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { bookName, bookISBN, bookPage, bookCover } = formData;

    if (!pb.authStore.model) {
      return alert("You are not logged in!");
    }

    const formDataToSend = {
      name: bookName,
      isbn: bookISBN,
      pages: bookPage,
      cover: bookCover,
      user_id: pb.authStore.model.id,
    };

    try {
      const response = await pb.collection("atay_books").create(formDataToSend);

      if (response.ok) {
        // Data was successfully uploaded
        console.log("Book added successfully!");
      } else {
        // Handle any errors here
        console.error(
          "Failed to add book:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <h2>New book page</h2>
      <form onSubmit={newBookSubmit}>
        <TextField
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          label="Book name"
          variant="filled"
        />
        <TextField
          name="bookAuthor"
          value={formData.bookAuthor}
          onChange={handleChange}
          label="Author"
          variant="filled"
        />
        <TextField
          name="bookISBN"
          value={formData.bookISBN}
          onChange={handleChange}
          label="ISBN"
          variant="filled"
        />
        <TextField
          name="bookPage"
          value={formData.bookPage}
          onChange={handleChange}
          label="Page count"
          variant="filled"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
        />
        <input
          type="file"
          accept=".png,.jpeg,.jpg"
          onChange={handleCoverChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add new book
        </Button>
      </form>
    </>
  );
};

export default New;
