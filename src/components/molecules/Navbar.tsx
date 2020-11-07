import { Link } from "@reach/router";
import { Box, Container, Image } from "components/atoms";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Box display={["none", null, "block"]}>
      <Container py={4}>
        <Link to="/">
          <Image src="/logo.svg" width={150} />
        </Link>
      </Container>
    </Box>
  );
};

export default Navbar;
