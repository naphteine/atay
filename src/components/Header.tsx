"use client";

import pb from "@/lib/pocketbase";
import { useEffect, useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(pb.authStore.isValid);

    if (pb.authStore?.model?.username) setName(pb.authStore.model.username);
  }, []);

  const emailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      console.log("EMAIL: " + email + " | PASS: " + password);
      const result = await pb
        .collection("users")
        .authWithPassword(email, password);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    pb.authStore.clear();
  };

  return (
    <>
      {loggedIn ? (
        <>
          <h2>LOGGED IN: {name}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <input
            placeholder="email"
            type="email"
            onChange={emailChange}
            value={email}
          />
          <input
            placeholder="password"
            type="password"
            onChange={passwordChange}
            value={password}
          />
          <button onClick={login}>Login</button>
        </>
      )}
    </>
  );
};

export default Header;
