"use client";

import { ListResult, RecordModel } from "pocketbase";
import pb from "@/lib/pocketbase";
import { useEffect, useState } from "react";

const LastAddedPublishers = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);

  const getAndSetData = async () => {
    const result = await pb
      .collection("atay_publishers")
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
      <h2>Last added publishers</h2>
      {data &&
        data.items.map((publisher) => {
          return <li key={publisher.id}>{publisher.name}</li>;
        })}
    </>
  );
};

export default LastAddedPublishers;
