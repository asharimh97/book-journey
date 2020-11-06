import { Box, Text, Title } from "components/atoms";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const PageHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Box mt={4} mb={[4, null, 5, 6]}>
      <Text color="black.secondary" fontSize={0} tight>
        {subtitle}
      </Text>
      <Title as="h4" tight>
        {title}
      </Title>
    </Box>
  );
};

export default PageHeading;
