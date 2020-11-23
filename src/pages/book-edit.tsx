import Layout from "components/Layout";
import BookEditDetail from "components/organisms/BookEditDetail";
import React, { Suspense } from "react";

type Props = {}

const EditBook: React.FC<Props> = ({ ...props }) => {
  return (
    <Layout title="Edit book">
      <Suspense fallback={<div>Loading...</div>}>
        <BookEditDetail />
      </Suspense>
    </Layout>
  )
}

export default EditBook;
