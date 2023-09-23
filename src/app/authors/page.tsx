import LastAddedAuthors from "@/components/LastAddedAuthors";
import styles from "@/styles/pages/Authors.module.css";

export default async function Authors() {
  return (
    <>
      <main className={styles.main}>
        <LastAddedAuthors />
      </main>
    </>
  );
}
