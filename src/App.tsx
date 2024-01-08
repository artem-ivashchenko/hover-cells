import { useEffect, useState } from "react";
import "./App.scss";
import {
  Container,
  Stack,
  Divider,
  Alert,
  SelectChangeEvent,
  Typography,
  Box,
  Button,
  Chip,
  Drawer,
} from "@mui/material";
import getModes from "./api/api";

import GridHover from "./components/GridHover";

import ModeOption from "./types/ModeOption";
import Cell from "./types/Сell";
import SelectMode from "./components/SelectMode";
import HoveredList from "./components/HoveredList";

function App() {
  const [cells, setCells] = useState<Cell[]>([]);
  const [modes, setModes] = useState<ModeOption[]>([]);
  const [selectedModeId, setSelectedModeId] = useState<string>("");
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isListOpened, setIsListOpened] = useState<boolean>(false);

  const show = isStarted && selectedModeId && !!cells.length;

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setIsStarted(false);
    setSelectedModeId(event.target.value);
  };

  const handleButtonCick = () => {
    if (!selectedModeId) {
      return;
    }

    generateCells();
    setIsStarted(true);
  };

  const handleListOpen = () => {
    setIsListOpened((prev) => !prev);
  };

  const generateCells = () => {
    const selectedMode = modes.find((mode) => mode.id === selectedModeId);

    if (!selectedMode) {
      return;
    }

    const num = selectedMode.field;
    const result: Cell[] = [];

    for (let i = 0; i < num * num; i++) {
      result.push({
        id: `${i + 1}-cell`,
        row: Math.floor(i / num) + 1,
        column: (i % num) + 1,
        hovered: false,
      });
    }

    setCells(result);
  };

  useEffect(() => {
    getModes().then(setModes);
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "16px",
      }}
    >
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
        sx={{
          minWidth: "300px",
          my: "16px",
        }}
      >
        {!selectedModeId && (
          <Alert severity="info">Please, choose the mode</Alert>
        )}

        <Box sx={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <SelectMode
            currentMode={selectedModeId}
            modes={modes}
            onSelectChange={handleSelectChange}
          />

          <Button variant="contained" onClick={handleButtonCick}>
            START
          </Button>

          {show && (
            <Button variant="contained" onClick={handleListOpen}>
              OPEN HOVER LIST
            </Button>
          )}
        </Box>

        {show && <GridHover items={cells} onCellChange={setCells} />}
      </Stack>

      <HoveredList open={isListOpened} cells={cells} onClose={handleListOpen} />
    </Container>
  );
}

export default App;
