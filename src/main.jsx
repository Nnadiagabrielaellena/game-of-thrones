import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./normalize.css";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
  <CssBaseline /> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);
