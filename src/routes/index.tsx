import { Router } from "@reach/router";
import Home from "pages/home";
import Login from "pages/login";
import React from "react";
import PublicRoute from "./PublicRoute";

type Props = {};

const Routes: React.FC<Props> = props => {
  return (
    <Router>
      <PublicRoute page={Home} />
      <PublicRoute page={Login} />
    </Router>
  );
};

export default Routes;
