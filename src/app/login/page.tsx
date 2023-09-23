"use client";

import Header from "@/components/Header";
import useAuth from "@/context/AuthProvider";
import pb from "@/lib/pocketbase";
import styles from "@/styles/pages/Login.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const { auth, setAuth } = useAuth();
  const [userData, setUserData] = useState(pb.authStore.model);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setAuth(pb.authStore.isValid);
    console.log(pb.authStore);

    if (pb.authStore.isValid) {
      setUserData(pb.authStore.model);
    }
  }, []);

  const emailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const passChange = (e: any) => {
    setPassword(e.target.value);
  };

  const formSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitted");

    try {
      const res = await pb
        .collection("atay_users")
        .authWithPassword(email, password);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setAuth(pb.authStore.isValid);
      setUserData(pb.authStore.model);
      router.push("/");
    }
  };

  const logoutUser = () => {
    pb.authStore.clear();
    setAuth(false);
    setUserData(pb.authStore.model);
    router.push("/");
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Login</h1>

        {auth && (
          <>
            <h2>LOGGED IN</h2>
            <h3>{userData?.email}</h3>
            <button onClick={logoutUser}>Logout</button>
          </>
        )}

        <form onSubmit={formSubmit}>
          <input onChange={emailChange} placeholder="e-mail" type="email" />
          <input onChange={passChange} placeholder="password" type="password" />
          <button>Login</button>
        </form>
      </main>
    </>
  );
}
