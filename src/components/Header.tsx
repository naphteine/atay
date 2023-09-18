import { cookies } from "next/headers";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const cookie = cookies().get("pb_auth");

  let isLoggedIn = false;
  let userName = "";

  if (cookie) {
    try {
      const { model } = JSON.parse(cookie.value);

      isLoggedIn = model ? true : false;
      userName = model.username;
    } catch (e) {
      isLoggedIn = false;
      userName = "";
    }
  }

  return (
    <header>
      <h1>ATAY</h1>
      <nav>
        <Link className={styles.button} href="/">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link className={styles.button} href="/dashboard">
              Profile
            </Link>
            <Link className={styles.button} href="/new">
              Add new book
            </Link>
          </>
        ) : (
          <Link className={styles.button} href="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
