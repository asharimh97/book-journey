import { Box, Flex, Text, Title } from "components/atoms";
import React from "react";

type Props = {
  code?: number;
  message?: string;
};

const ErrorMessage: React.FC<Props> = ({ code, message }) => {
  return (
    <Flex
      align="center"
      position="absolute"
      top="50%"
      left="50%"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <Title as="h3" tight>
        {code}
      </Title>
      <Box
        width="2px"
        minHeight={26}
        height="100%"
        backgroundColor="black.80"
        mx={4}
      />
      <Text>{message}</Text>
    </Flex>
  );
};

ErrorMessage.defaultProps = {
  code: 404,
  message: "Oops! It seems you are lost buddy"
};

export default ErrorMessage;
