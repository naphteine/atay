"use client";

import { RecordModel } from "pocketbase";

import styles from "@/styles/components/BookItem.module.css";
import { useEffect, useState } from "react";
import pb from "@/lib/pocketbase";

const BookItem = ({ data }: { data: RecordModel }) => {
  const [author, setAuthor] = useState<RecordModel[] | null>(null);

  const getAuthors = async () => {
    const result = await pb
      .collection("atay_bookAuthors")
      .getFullList({ filter: `book = "${data.id}"`, expand: "author" });
    setAuthor(result);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <li className={styles.bookItem}>
      <div className={styles.bookCover}>
        {data.cover && (
          <img
            width={100}
            src={`https://aya.gokay.works/api/files/${data.collectionId}/${data.id}/${data.cover}`}
          />
        )}
      </div>
      <aside>
        <h3>{data.name}</h3>
        <h4>{data.expand && data.expand.publisher.name}</h4>
        {author && (
          <ul>
            {author.map((authorItem) => (
              <li key={authorItem.expand?.author.id}>
                {authorItem.expand?.author.name}
              </li>
            ))}
          </ul>
        )}
        <em>{data.isbn}</em>
      </aside>
    </li>
  );
};

export default BookItem;
