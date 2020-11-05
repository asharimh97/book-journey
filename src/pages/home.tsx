import { Link } from "@reach/router";
import { Box, Button, Card, Flex, Image, Text, Title } from "components/atoms";
import Layout from "components/Layout";
import React from "react";

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <Flex
        flexDirection={["column-reverse", null, "row"]}
        justifyContent={["space-between"]}
        height="100%"
        alignItems="center"
        mt={["0px", null, -6]}
      >
        <Box
          width={["100%", null, "40%"]}
          textAlign={["center", null, "left"]}
          pb={[5, null, "0px"]}
        >
          <Title as="h2" mt={3}>
            Reading is a journey
          </Title>
          <Text color="black.secondary" mb={7}>
            “So long as victory can be attained, stupid haste is preferable to
            clever dilatoriness.”
            <br />
            <br /> - Sun Tzu, The Art of War
          </Text>
          <Link to="/books" style={{ textDecoration: "none" }}>
            <Button
              color="orange"
              colorType="gradient"
              rounded
              mx={["auto", null, "0px"]}
              px={6}
            >
              See my journey
            </Button>
          </Link>
        </Box>
        <Image
          src="/home-illustration.png"
          width={["100%", null, 375, 450]}
          mt={[7, null, 4]}
          mb={4}
        />
      </Flex>
    </Layout>
  );
};

export default Home;
