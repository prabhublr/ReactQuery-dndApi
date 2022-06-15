import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const reactQueryClient = new QueryClient();
let CustomTheme = createTheme();
CustomTheme = responsiveFontSizes(CustomTheme);

axios.defaults.baseURL = "https://www.dnd5eapi.co/";

root.render(
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <ThemeProvider theme={CustomTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
