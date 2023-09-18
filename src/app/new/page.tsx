import { TextField } from "@mui/material";

const New = () => {
  return (
    <>
      <h2>New book page</h2>
      <TextField label="Book name" variant="filled" />
      <TextField label="ISBN" variant="filled" />
      <TextField
        label="Page count"
        variant="filled"
        type="number"
        InputProps={{ inputProps: { min: 0 } }}
      />
    </>
  );
};

export default New;
