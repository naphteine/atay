import styles from "@/styles/pages/Home.module.css";
import PocketBase from "pocketbase";

export default async function Home() {
  const pb = new PocketBase("https://duga1.xyz");
  const data = await pb.collection("atay_books").getList(1, 20);

  return (
    <>
      <main className={styles.main}>
        <ul>
        {data.items.map((book) => {
          return (
            <li key={book.id}>
              <h2>{book.name}</h2>
              <img
                src={`${process.env.POCKETBASE_URL}/api/files/${book.collectionId}/${book.id}/${book.cover}`}
              />
            </li>
          );
        })}
        </ul>
      </main>
    </>
  );
}
