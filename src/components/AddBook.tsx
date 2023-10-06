"use client";

import pb from "@/lib/pocketbase";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { RecordModel } from "pocketbase";
import { ChangeEvent, useState, useEffect } from "react";

interface bookObject {
  name: string;
  isbn: string;
  pages: number;
  cover: File | null;
  user_id: string;
}

const AddBook = () => {
  const [authorList, setAuthorList] = useState<RecordModel[] | null>(null);
  const [selectedAuthors, setSelectedAuthors] = useState<RecordModel[]>([]);

  const [book, setBook] = useState<bookObject>({
    name: "",
    isbn: "",
    pages: 0,
    cover: null,
    user_id: "",
  });

  const getAuthorList = async () => {
    try {
      const result = await pb.collection("atay_authors").getFullList();
      setAuthorList(result);
    } catch (e) {
      alert(e);
    }
  };

  const handleAutocompleteChange = (
    event: React.ChangeEvent<{}>,
    newValue: RecordModel[] | null
  ) => {
    setSelectedAuthors(newValue || []);
  };

  useEffect(() => {
    getAuthorList();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pages" && +e.target.value < 0)
      return alert("Book pages can't be negative!");

    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    if (book.name === "") return alert("Book name can't be empty!");
    if (!pb.authStore?.model?.id) return alert("You are not logged in!");

    const userId = pb.authStore.model.id;

    const result = await pb
      .collection("atay_books")
      .create({ ...book, user_id: userId });

    console.log("BOOK RESULT: " + result);
    const bookId = result.id;

    console.log("bookId = " + bookId);

    selectedAuthors.map(async (author) => {
      const result_author = await pb.collection("atay_bookAuthors").create({
        book: bookId,
        author: author.id,
        user: userId,
      });
      console.log("AUTHOR RESULT: " + result_author);
    });

    setBook({ name: "", isbn: "", pages: 0, cover: null, user_id: "" });
    setSelectedAuthors([]);
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
        min="0"
        onChange={handleChange}
        value={book.pages}
      />
      {authorList && (
        <Autocomplete
          multiple
          id="author"
          value={selectedAuthors}
          onChange={handleAutocompleteChange}
          getOptionLabel={(author) => author.name}
          options={authorList}
          noOptionsText="Nothing found!"
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} label="Author(s)" />}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={option.id}
                label={option.name}
              />
            ));
          }}
        />
      )}
      <input type="file" name="cover" onChange={handleChange} />
      <button onClick={addBook}>Add book</button>
    </>
  );
};

export default AddBook;
