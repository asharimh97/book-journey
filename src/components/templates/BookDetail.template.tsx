import { Box, Flex } from "components/atoms";
import React from "react";
import Skeleton from "react-loading-skeleton";

const BookDetailTemplate: React.FC = () => {
  return (
    <Flex
      justifyContent={["flex-start", null, "space-between"]}
      flexDirection={["column", null, "row-reverse"]}
    >
      <Box
        width={["100%", null, 215]}
        pt={["100%", null, 295]}
        height={0}
        position="relative"
        mb={3}
      >
        <Box
          position="absolute"
          left="0px"
          top="0px"
          width="100%"
          height="100%"
        >
          <Skeleton height="100%" />
        </Box>
      </Box>
      <Box width="100%" maxWidth={450}>
        <Skeleton
          height={28}
          width="70%"
          style={{ marginBottom: "8px", display: "block" }}
        />
        <Skeleton
          height={21}
          width="25%"
          style={{ marginBottom: "40px", display: "block" }}
        />
        <Skeleton height={21} width="30%" style={{ marginBottom: "16px" }} />
        <Skeleton count={10} />
      </Box>
    </Flex>
  );
};

export default BookDetailTemplate;
