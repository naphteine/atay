"use client";

import pb from "@/lib/pocketbase";
import { ListResult, RecordModel } from "pocketbase";
import { useEffect, useState } from "react";

const LastAddedBooks = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);

  const getData = async () => {
    const receive = await pb.collection("atay_books").getList(1, 20);
    setData(receive);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Last added books</h1>
      {data && (
        <ul>
          {data.items.map((record) => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LastAddedBooks;
