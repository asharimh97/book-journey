import React, { useRef } from "react";
import { Container } from "./atoms";
import Navbar from "./molecules/Navbar";

type Prop = {
  children?: any;
};

const Layout: React.FC<Prop> = ({ children, ...props }) => {
  return (
    <>
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
