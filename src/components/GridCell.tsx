import { Grid } from "@mui/material";
import Cell from "../types/Сell";
import React from "react";

type Props = {
  item: Cell;
  onCellChange: (value: Cell) => void;
};

const GridCell: React.FC<Props> = ({ item, onCellChange }) => {
  return (
    <Grid
      item
      sx={{
        border: "1px solid black",
        bgcolor: item.hovered ? "blue" : "white",
      }}
      key={item.id}
      onMouseEnter={() => onCellChange(item)}
    ></Grid>
  );
};

export default React.memo(GridCell, (prev, next) => {
  return prev.item.hovered === next.item.hovered;
});
