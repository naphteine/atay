"use client";

import Header from "@/components/Header";
import useAuth from "@/context/AuthProvider";
import pb from "@/lib/pocketbase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const [userData, setUserData] = useState(pb.authStore.model);
  const router = useRouter();

  useEffect(() => {
    setAuth(pb.authStore.isValid);
    setUserData(pb.authStore.model);
  }, []);

  const logoutUser = () => {
    pb.authStore.clear();
    setAuth(false);
    setUserData(pb.authStore.model);
    router.push("/");
  };

  return (
    <>
      <Header />
      <h1>Profile</h1>
      {auth && (
        <>
          <h2>{userData?.email}</h2>
          <button onClick={logoutUser}>Logout</button>
        </>
      )}
    </>
  );
}
