import React from "react";
import { render, hydrate } from "react-dom";
// import { render } from "react-snapshot";
import "./styles/app.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { RecoilRoot } from "recoil";

import Routes from "routes";
import { ToastProvider } from "react-toast-notifications";

const App = (
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

// @ts-ignore
// if (rootElement.hasChildNodes()) {
//   hydrate(App, rootElement);
// } else {
render(App, rootElement);
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
