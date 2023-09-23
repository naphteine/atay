import LastAddedBooks from "@/components/LastAddedBooks";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <LastAddedBooks />
      </main>
    </>
  );
}
