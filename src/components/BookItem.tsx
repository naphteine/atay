import styles from "@/styles/components/BookItem.module.css";

interface BookItemProps {
  name: string;
  cover: string;
  isbn: string;
}

const BookItem: React.FC<BookItemProps> = ({ name, cover, isbn }) => {
  return (
    <div className={styles.bookItem}>
      {cover ? (
        <img
          className={styles.bookCover}
          src={cover}
          alt={`${name} cover`}
          width={160}
        />
      ) : (
        <div className={styles.emptyCover}>
          {name}
          <br />
          {isbn}
        </div>
      )}
    </div>
  );
};
0;
export default BookItem;
