import React from "react";
import Helmet from "react-helmet";
import { Container } from "./atoms";
import Navbar from "./molecules/Navbar";

type Prop = {
  children?: any;
  title?: string;
};

const Layout: React.FC<Prop> = ({ children, title, ...props }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} - ` : ""}Book Journey</title>
      </Helmet>
      <Navbar />
      <Container
        height={["100vh", null, "calc(100vh - 98px)"]}
        maxHeight="100%"
        px={[4, null, null, "0px"]}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
