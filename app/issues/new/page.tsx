'use client'
import { TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <TextField.Root>
      <TextField.Input placeholder="Title" />
    </TextField.Root>
  );
};

export default NewIssuePage;
