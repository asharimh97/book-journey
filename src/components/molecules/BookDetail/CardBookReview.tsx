import React from "react";
import { Box, Card, Flex, Text, Title } from "components/atoms";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

type Props = {
  book: Record<string, any>;
};

const CardWrapper = styled(Card)`
  border: none;
  border-radius: 30px;
  margin-top: -64px;
  padding: 24px;
  width: 100%;
  max-width: 450px;
  z-index: 5;

  ${themeGet("mediaQueries.md")} {
    margin-top: 0;
  }

  ${themeGet("mediaQueries.lg")} {
    padding: 0;
  }
`;

const CardBookReview: React.FC<Props> = ({ book: bookDetail }) => {
  return (
    <CardWrapper>
      <Flex justifyContent="space-between" mb={6}>
        <Box>
          <Title as="h4" mt={0} mb={2}>
            {bookDetail?.title || <Skeleton />}
          </Title>
          <Text color="black.secondary" fontSize={0} semibold tight>
            {bookDetail?.author || <Skeleton />}
          </Text>
        </Box>
        <Text
          color="black.60"
          textAlign="center"
          uppercase
          bold
          tight
          fontSize={0}
          ml={4}
        >
          {bookDetail?.read_at && (
            <>
              {format(new Date(bookDetail.read_at), "MMM")}
              <br />
              {format(new Date(bookDetail.read_at), "yyyy")}
            </>
          )}
        </Text>
      </Flex>

      <Text bold>My Review</Text>
      <Text lineHeight="175%" color="black.80">
        {bookDetail?.review}
      </Text>
    </CardWrapper>
  );
};

export default CardBookReview;
