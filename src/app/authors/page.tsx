import LastAddedAuthors from "@/components/LastAddedAuthors";
import AddAuthor from "@/components/AddAuthor";
import styles from "@/styles/pages/Authors.module.css";

export default async function Authors() {
  return (
    <>
      <main className={styles.main}>
        <LastAddedAuthors />
        <AddAuthor />
      </main>
    </>
  );
}
