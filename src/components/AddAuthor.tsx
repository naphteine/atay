"use client";

import pb from "@/lib/pocketbase";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AddAuthor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(pb.authStore.isValid);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Add Author</h1>
          <em>You can add authors here</em>
          <TextField>Fuck</TextField>
          <Button>Add Author</Button>
        </>
      ) : (
        <>
          <h1>Add Authors</h1>
          <em>You have to login to add authors.</em>
        </>
      )}
    </>
  );
};

export default AddAuthor;
