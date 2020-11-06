import { Link } from "@reach/router";
import { Box, Image, Text } from "components/atoms";
import React from "react";

type Props = {
  book: Record<string, any>;
  [key: string]: any;
};

const BookCard: React.FC<Props> = ({ book, ...props }) => {
  const { author, title, cover = "some-image.jpg", id } = book;
  return (
    <Box data-testid="book-card" {...props}>
      <Link
        to={`/book/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Image
          data-testid="book-cover"
          src={cover}
          alt={title}
          width="100%"
          height={205}
          autofit
          rounded
          mb={3}
        />
        <Text data-testid="book-title" bold truncate tight>
          {title}
        </Text>
        <Text
          data-testid="book-author"
          color="black.secondary"
          fontSize={0}
          truncate
          tight
        >
          {author}
        </Text>
      </Link>
    </Box>
  );
};

export default BookCard;
