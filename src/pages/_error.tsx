import Layout from "components/Layout";
import ErrorMessage from "components/molecules/ErrorMessage";
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <Layout title="Oops!">
      <ErrorMessage />
    </Layout>
  );
};

export default ErrorPage;
