import React from "react";
import { TextField } from "@mui/material";
export default function Input({ label, type = "text", name, value, onChange }) {
  return (
    <>
      {" "}
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={label}
        type={type}
        name={name}
        value={value}
        autoComplete={name}
        onChange={onChange}
      />
    </>
  );
}
