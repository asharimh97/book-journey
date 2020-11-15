import { Flex, Image, Text, Title } from "components/atoms";
import React from "react";

const EmptyMessage: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" py={4}>
      <Image src="/void.svg" alt="No data" width={250} />
      <Title as="h4" mb={2}>
        Uh oh! No data found!
      </Title>
      <Text color="black.80" textAlign="center">
        Remain calm buddy, we must've forgotten to fill this page
      </Text>
    </Flex>
  );
};

export default EmptyMessage;
