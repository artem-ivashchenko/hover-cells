import React from "react";
import { Chip, Drawer, Stack, Typography } from "@mui/material";
import Cell from "../types/Сell";

type Props = {
  open: boolean;
  cells: Cell[];
  onClose: () => void;
};

const HoveredList: React.FC<Props> = ({ open, cells, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <Stack
        spacing={1}
        sx={{
          minWidth: "300px",
          maxHeight: "100vh",
          overflowY: "scroll",
          p: "16px",
        }}
      >
        <Typography variant="h3">Hover Squares</Typography>

        {cells
          .filter((cell) => cell.hovered)
          .map((cell) => (
            <Chip
              label={`row ${cell.row}, col ${cell.column}`}
              sx={{ minHeight: "20px" }}
              key={cell.id}
            />
          ))}
      </Stack>
    </Drawer>
  );
};

export default HoveredList;
