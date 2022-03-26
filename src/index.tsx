import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { queryClient } from "./query";
import reportWebVitals from "./reportWebVitals";
import { AppFallback } from "./components";
import theme from "./theme";

// import i18n (needs to be bundled ;))
import "./i18n/config";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter>
          <React.Suspense fallback={<AppFallback />}>
            <App />
          </React.Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
