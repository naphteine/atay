"use client";

import useAuth from "@/context/AuthProvider";
import pb from "@/lib/pocketbase";
import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const currentRoute = usePathname();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    setAuth(pb.authStore.isValid);
  });

  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="Atay Logo"
        width={320}
        height={128}
      />
      <h1 className={styles.description}>Book Tracking App</h1>

      <nav>
        <Link
          className={`${styles.link} ${
            currentRoute == "/" ? styles.activeLink : ""
          }`}
          href="/"
        >
          Search
        </Link>
        {auth ? (
          <>
          <Link
            className={`${styles.link} ${
              currentRoute == "/dashboard" ? styles.activeLink : ""
            }`}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={`${styles.link} ${
              currentRoute == "/new" ? styles.activeLink : ""
            }`}
            href="/new"
          >
            New book
          </Link>
          </>
        ) : (
          <Link
            className={`${styles.link} ${
              currentRoute == "/login" ? styles.activeLink : ""
            }`}
            href="/login"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
