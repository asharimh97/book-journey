import Layout from "components/Layout";
import BookReviewDetail from "components/organisms/BookReviewDetail";
import BookDetailTemplate from "components/templates/BookDetail.template";
import React, { Suspense } from "react";

const BookDetail: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<BookDetailTemplate />}>
        <BookReviewDetail />
      </Suspense>
    </Layout>
  );
};

export default BookDetail;
