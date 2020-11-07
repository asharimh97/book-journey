import { Grid } from "components/atoms";
import Layout from "components/Layout";
import BookCard from "components/molecules/BookCard";
import PageHeading from "components/molecules/PageHeading";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { booksQuery } from "stores/selectors";

const BookList: React.FC = () => {
  const books = useRecoilValue(booksQuery);

  useEffect(() => {
    console.log(books);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <PageHeading
        data-testid="page-heading"
        title="Books I've read"
        subtitle="Explore"
      />
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
    </Layout>
  );
};

export default BookList;
