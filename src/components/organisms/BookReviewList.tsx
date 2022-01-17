import { Grid, Text } from "components/atoms";
import BookCard from "components/molecules/BookCard";
import EmptyMessage from "components/molecules/EmptyMessage";
import React from "react";
import { useRecoilValue } from "recoil";
import { booksQuery } from "stores/selectors";

const BookReviewList: React.FC = () => {
  const books = useRecoilValue(booksQuery);
  const [grouped, setGrouped] = React.useState({});

  React.useEffect(() => {
    const groupedBook = groupBook();

    setGrouped(groupedBook);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  const groupBook = React.useCallback(() => {
    if (books.length > 0) {
      // return books.map(book => book.read_at);
      return books.reduce((obj, book) => {
        const [year] = book.read_at.split("-");

        if (!obj[year]) {
          obj[year] = [book];
        } else {
          obj[year].push(book);
        }
        return obj;
      }, {});
    }
  }, [books]);

  const renderBooks = () => {
    // descending based on its year
    // @ts-ignore
    const years = Object.keys(grouped).sort((a, b) => b - a);

    return years.map(year => {
      return (
        <section>
          <Text bold fontSize={4}>
            {year}
          </Text>
          <Grid
            data-testid="book-list"
            columns={[
              "repeat(2, 1fr)",
              null,
              "repeat(4, 1fr)",
              "repeat(6, 1fr)"
            ]}
            gap={20}
          >
            {
              // @ts-ignore
              grouped[year].map(book => (
                <BookCard
                  data-testid="book-item"
                  key={book.id}
                  book={book}
                  minWidth={136}
                  maxWidth={158}
                />
              ))
            }
          </Grid>
        </section>
      );
    });
  };

  if (books.length === 0) return <EmptyMessage />;

  return <>{renderBooks()}</>;

  // return (
  //   <Grid
  //     data-testid="book-list"
  //     columns={["repeat(2, 1fr)", null, "repeat(4, 1fr)", "repeat(6, 1fr)"]}
  //     gap={20}
  //   >
  //     {renderBooks()}
  //     {books.map(book => (
  //       <BookCard
  //         data-testid="book-item"
  //         key={book.id}
  //         book={book}
  //         minWidth={136}
  //         maxWidth={158}
  //       />
  //     ))}
  //   </Grid>
  // );
};

export default BookReviewList;
