import { Grid } from "@mui/material";
import Cell from "../types/Сell";
import GridCell from "./GridCell";
import getCellSize from "../utils/getCellSize";

type Props = {
  items: Cell[];
  onCellChange: React.Dispatch<React.SetStateAction<Cell[]>>;
};

const GridHover: React.FC<Props> = ({ items, onCellChange }) => {
  const size = Math.sqrt(items.length);

  const handleCellHover = (element: Cell) => {
    onCellChange((prev) =>
      prev.map((item) => {
        if (item.id !== element.id) {
          return item;
        }
        return { ...item, hovered: !element.hovered };
      })
    );
  };

  return (
    <Grid
      sx={{
        display: "grid",
        placeContent: "center",
        gridTemplateColumns: `repeat(${size}, ${getCellSize(size)}px)`,
        gridTemplateRows: `repeat(${size}, ${getCellSize(size)}px)`,
      }}
    >
      {items.map((element) => (
        <GridCell
          item={element}
          onCellChange={handleCellHover}
          key={element.id}
        />
      ))}
    </Grid>
  );
};

export default GridHover;
