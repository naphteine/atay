"use client";

import { useState, useEffect } from "react";
import { ListResult, RecordModel } from "pocketbase";
import pb from "@/lib/pocketbase";
import { Autocomplete, Chip, TextField } from "@mui/material";

const AuthorField = () => {
  const [data, setData] = useState<ListResult<RecordModel> | null>(null);

  const getData = async (keyword?: string) => {
    const receive = await pb.collection("atay_authors").getList(1, 20);
    setData(receive);
  };

  useEffect(() => {
    getData();
  }, []);

  const authorChange = (e: any) => {
    getData(e.target.value);
  };

  return (
    <>
      {data && (
        <Autocomplete
          multiple
          id="tags-filled"
          options={data.items.map((author) => author.name)}
          freeSolo
          onChange={authorChange}
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Author(s)" />
          )}
        />
      )}
    </>
  );
};

export default AuthorField;
