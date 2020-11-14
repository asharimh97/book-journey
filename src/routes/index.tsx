import { Router } from "@reach/router";
import AddBook from "pages/book-add";
import BookDetail from "pages/book-detail";
import BookList from "pages/book-list";
import Home from "pages/home";
import Login from "pages/login";
import Logout from "pages/logout";
import ErrorPage from "pages/_error";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes: React.FC = () => {
  return (
    <Router>
      <PublicRoute page={Home} path="/" />
      <PublicRoute page={Login} path="/login" />
      <PublicRoute page={BookList} path="/books" />
      <PublicRoute page={BookDetail} path="/book/:id" />
      <PublicRoute page={Logout} path="/logout" />

      <PrivateRoute page={AddBook} path="/add-book" />

      <PublicRoute page={ErrorPage} default />
    </Router>
  );
};

export default Routes;
