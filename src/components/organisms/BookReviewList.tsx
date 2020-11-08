import { Grid } from "components/atoms";
import BookCard from "components/molecules/BookCard";
import React from "react";
import { useRecoilValue } from "recoil";
import { booksQuery } from "stores/selectors";

const BookReviewList: React.FC = () => {
  const books = useRecoilValue(booksQuery);

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
      {books.map(book => (
        <BookCard
          data-testid="book-item"
          key={book.id}
          book={book}
          minWidth={136}
          maxWidth={158}
        />
      ))}
    </Grid>
  );
};

export default BookReviewList;
