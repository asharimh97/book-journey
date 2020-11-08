import Layout from "components/Layout";
import PageHeading from "components/molecules/PageHeading";
import BookReviewList from "components/organisms/BookReviewList";
import BookListTemplate from "components/templates/BookList.template";
import React, { Suspense } from "react";

const BookList: React.FC = () => {
  return (
    <Layout title="All books I've read">
      <PageHeading
        data-testid="page-heading"
        title="Books I've read"
        subtitle="Explore"
      />
      <Suspense fallback={<BookListTemplate />}>
        <BookReviewList />
      </Suspense>
    </Layout>
  );
};

export default BookList;
