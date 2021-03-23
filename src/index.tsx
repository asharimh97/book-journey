import React from "react";
import { render } from "react-snapshot";
import "./styles/app.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { RecoilRoot } from "recoil";

import Routes from "routes";
import { ToastProvider } from "react-toast-notifications";

render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
