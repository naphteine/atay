"use client";

import { ListResult, RecordModel } from "pocketbase";
import pb from "@/lib/pocketbase";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";

const LastAddedBooks = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState<ListResult<RecordModel> | null>(
    null
  );

  const getSetLatestBooks = async () => {
    const result = await pb
      .collection("atay_books")
      .getList(1, 20, { sort: "-created" });

    if (result != null) {
      setData(result);
    }
  };

  const getSetSearchBooks = async (keyword: string) => {
    const result = await pb
      .collection("atay_books")
      .getList(1, 20, { filter: `name ~ "${keyword}"`, sort: "-created" });

    if (result != null) {
      setSearchData(result);
    }
  };

  const searchChange = (e: any) => {
    if (e.target.value == 0) setIsSearch(false);
    setSearch(e.target.value);
  };

  const searchSubmit = (e: any) => {
    e.preventDefault();
    setIsSearch(true);
    getSetSearchBooks(search);
  };

  useEffect(() => {
    getSetLatestBooks();
  }, []);

  return (
    <>
      <h2>Last added books</h2>

      <form onSubmit={searchSubmit}>
        <input
          type="text"
          value={search}
          onChange={searchChange}
          onSubmit={searchSubmit}
          placeholder="book name..."
        />
        <button type="submit">search</button>
      </form>
      {isSearch
        ? searchData &&
          searchData.items.map((book) => {
            return <BookItem key={book.id} data={book} />;
          })
        : data &&
          data.items.map((book) => {
            return <BookItem key={book.id} data={book} />;
          })}
    </>
  );
};

export default LastAddedBooks;
