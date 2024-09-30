"use client";

import { ListResult, RecordModel } from "pocketbase";
import pb from "@/lib/pocketbase";
import { useEffect, useState } from "react";

const LastAddedAuthors = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);

  const getAndSetData = async () => {
    const result = await pb
      .collection("bookAuthors")
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
      <h2>Last added authors</h2>
      {data &&
        data.items.map((author) => {
          return <li key={author.id}>{author.name}</li>;
        })}
    </>
  );
};

export default LastAddedAuthors;
