import React from "react";
import { Paper, Box, Stack } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "80%",
            height: "70vh",
            borderRadius: "30px",
            mt: "30px",
          }}
        />
        {/* <Box>{item.title}</Box> */}
      </Stack>
    </Paper>
  );
}

export default Item;
