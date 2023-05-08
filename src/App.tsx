import { useState } from "react";
import "./App.css";
import { Button } from "react-toolkit-ldv";
import { Alert } from "react-toolkit-ldv";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <h1>Using toolkit ldv</h1>
      <div style={{ display: "flex", gap: "22px", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Add
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setCount(count + 1)}
        >
          Subtract
        </Button>
      </div>
      <p>You clicked {count} times</p>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Box>
  );
}

export default App;
