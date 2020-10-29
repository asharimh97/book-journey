import React from "react";
import { RouteComponentProps } from "@reach/router";

type Props = {
  page: any;
} & RouteComponentProps;

const PublicRoute = (props: Props) => {
  const { page: Component, ...rest } = props;
  return <Component {...rest} />;
};

export default PublicRoute;
