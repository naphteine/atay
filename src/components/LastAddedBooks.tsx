"use client";

import { ListResult, RecordModel } from "pocketbase";
import pb from "@/lib/pocketbase";
import { useEffect, useState } from "react";

const LastAddedBooks = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);

  const getAndSetData = async () => {
    const result = await pb
      .collection("atay_books")
      .getList(1, 20, { sort: "-created" });

    if (result != null) {
      setData(result);
    }
  };

  useEffect(() => {
    getAndSetData();
  }, []);

  return (
    <>
      <h2>Last added books</h2>
      {data &&
        data.items.map((book) => {
          return (
            <li key={book.id}>
              <img
                width={100}
                src={`https://aya.gokay.works/api/files/${book.collectionId}/${book.id}/${book.cover}`}
              />
              {book.name}
              <em>{book.isbn}</em>
            </li>
          );
        })}
    </>
  );
};

export default LastAddedBooks;
