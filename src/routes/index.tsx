import { Router } from "@reach/router";
import Home from "pages/home";
import Login from "pages/login";
import React from "react";
import PublicRoute from "./PublicRoute";

type Props = {};

const Routes: React.FC<Props> = props => {
  return (
    <Router>
      <PublicRoute page={Home} path="/" />
      <PublicRoute page={Login} path="/login" />
    </Router>
  );
};

export default Routes;
