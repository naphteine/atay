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
            return <li key={book.id}>{book.name}</li>;
          })}
      </main>
    </>
  );
}
