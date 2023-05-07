import React from "react";
import { TextField } from "@mui/material";
export default function Input({
  label,
  name,
  value,
  onChange,
  autoFocus = false,
}) {
  return (
    <>
      {" "}
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={label}
        type={name}
        name={name}
        value={value}
        autoComplete={name}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </>
  );
}
