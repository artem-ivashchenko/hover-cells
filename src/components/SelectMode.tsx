import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ModeOption from "../types/ModeOption";

type Props = {
  currentMode: string;
  modes: ModeOption[];
  onSelectChange: (event: SelectChangeEvent<string>) => void;
};

const SelectMode: React.FC<Props> = ({
  currentMode,
  modes,
  onSelectChange,
}) => {
  return (
    <FormControl variant="filled" sx={{ minWidth: 300 }}>
      <InputLabel id="select-mode-label">Mode</InputLabel>
      <Select
        labelId="select-mode-label"
        value={currentMode}
        onChange={onSelectChange}
      >
        {modes.map((mode) => (
          <MenuItem
            value={mode.id}
            key={mode.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Mode: {mode.name}</Typography>
            <Typography>Cells: {mode.field}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMode;
