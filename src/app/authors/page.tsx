import styles from "@/styles/pages/Authors.module.css";
import PocketBase from "pocketbase";

export default async function Authors() {
  const pb = new PocketBase("https://duga1.xyz");
  const data = await pb.collection("atay_authors").getList(1, 20);

  return (
    <>
      <main className={styles.main}>
        <ul>
          {data.items.map((author) => {
            return (
              <li key={author.id}>
                <h1>{author.name}</h1>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
