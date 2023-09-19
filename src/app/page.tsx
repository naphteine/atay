import styles from "@/styles/pages/Home.module.css";
import Header from "@/components/Header";
import PocketBase from "pocketbase";

export default async function Home() {
  const pb = new PocketBase("https://duga1.xyz");
  const data = await pb.collection("atay_books").getList(1, 20);

  return (
    <>
      <Header />

      <main className={styles.main}>
        {data.items.map((book) => {
          return (
            <>
              <h2>{book.name}</h2>
              <img
                src={`https://duga1.xyz/api/files/${book.collectionId}/${book.id}/${book.cover}`}
              />
            </>
          );
        })}
      </main>
    </>
  );
}
