import { Router } from "@reach/router";
import BookDetail from "pages/book-detail";
import BookList from "pages/book-list";
import Home from "pages/home";
import Login from "pages/login";
import React from "react";
import PublicRoute from "./PublicRoute";

const Routes: React.FC = () => {
  return (
    <Router>
      <PublicRoute page={Home} path="/" />
      <PublicRoute page={Login} path="/login" />
      <PublicRoute page={BookList} path="/books" />
      <PublicRoute page={BookDetail} path="/book/:slug" />
    </Router>
  );
};

export default Routes;
