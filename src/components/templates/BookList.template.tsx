import { Box, Grid } from "components/atoms";
import React from "react";
import Skeleton from "react-loading-skeleton";

const BookListTemplate: React.FC = () => {
  const books = new Array(6).fill(0);

  return (
    <Grid
      data-testid="book-list"
      gridTemplateColumns={[
        "repeat(2, 1fr)",
        null,
        "repeat(4, 1fr)",
        "repeat(6, 1fr)"
      ]}
      gridGap={20}
    >
      {books.map((book, idx) => (
        <Box key={idx} minWidth={136} maxWidth={158}>
          <Skeleton height={205} style={{ marginBottom: "16px" }} />
          <Skeleton height={21} style={{ marginBottom: "4px" }} />
          <Skeleton height={18} />
        </Box>
      ))}
    </Grid>
  );
};

export default BookListTemplate;
