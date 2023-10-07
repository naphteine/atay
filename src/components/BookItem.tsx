import { RecordModel } from "pocketbase";

import styles from "@/styles/components/BookItem.module.css";

const BookItem = ({ data }: { data: RecordModel }) => {
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
        <em>{data.isbn}</em>
      </aside>
    </li>
  );
};

export default BookItem;
