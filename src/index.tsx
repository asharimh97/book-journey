import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { RecoilRoot } from "recoil";

import Routes from "routes";
import Layout from "components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Layout />}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
