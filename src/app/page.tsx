import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/logo.svg" alt="Atay" width={320} height={128} />
      <h2>Coming soon.</h2>
    </main>
  );
}
