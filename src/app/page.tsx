import BookItem from "@/components/BookItem";
import styles from "@/styles/pages/Home.module.css";
import PocketBase from "pocketbase";

export const fetchCache = "default-no-store";

async function getData() {
  const pb = new PocketBase("https://duga1.xyz");
  const data = pb.collection("atay_books").getList(1, 20);

  if (!data) {
    throw Error("No data!");
  }

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <main className={styles.main}>
        {data &&
          data.items.map((book) => {
            return (
              <BookItem
                key={book.id}
                name={book.name}
                cover={
                  book.cover
                    ? `https://duga1.xyz/api/files/${book.collectionId}/${book.id}/${book.cover}`
                    : `/book.svg`
                }
              />
            );
          })}
      </main>
    </>
  );
}
