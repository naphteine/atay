"use client";

import pb from "@/lib/pocketbase";
import { ListResult, RecordModel } from "pocketbase";
import { useEffect, useState } from "react";

const LastAddedAuthors = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);

  const getData = async () => {
    const receive = await pb.collection("atay_authors").getList(1, 20);
    setData(receive);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Last added authors</h1>
      {data && (
        <ul>
          {data.items.map((record) => (
            <li key={record.id}>
              {record.name}
              <em>{record.isbn}</em>
              <em>{record.cover}</em>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LastAddedAuthors;
