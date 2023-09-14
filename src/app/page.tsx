import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import { ButtonGroup, TextField } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2>Atay</h2>

        <ButtonGroup variant="contained">
        <Button>Average</Button>
        <Button>Lain</Button>
        <Button>Enjoyer</Button>
        </ButtonGroup>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </header>

      <Image src="/logo.svg" alt="Atay" width={320} height={128} />
      <h2>Coming soon.</h2>
    </main>
  );
}