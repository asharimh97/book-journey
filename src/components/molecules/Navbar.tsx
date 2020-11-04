import { Box, Container, Image } from "components/atoms";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Box display={["none", null, "block"]}>
      <Container py={4}>
        <Image src="/logo.svg" width={150} />
      </Container>
    </Box>
  );
};

export default Navbar;
