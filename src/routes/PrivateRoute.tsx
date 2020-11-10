import { RouteComponentProps } from "@reach/router";
import { useProtectedRoute } from "hooks";
import React from "react";

type Props = {
  page: any;
} & RouteComponentProps;

const PrivateRoute = (props: Props) => {
  useProtectedRoute();

  const { page: Component, ...rest } = props;

  return <Component {...rest} />;
};

export default PrivateRoute;
