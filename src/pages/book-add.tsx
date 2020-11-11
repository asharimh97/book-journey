import Layout from "components/Layout";
import CardAddBook from "components/organisms/CardAddBook";
import React from "react";

const AddBook: React.FC = () => {
  const handleAddBook = (data: any) => {
    console.log(data);
  };

  return (
    <Layout title="Add Book">
      <CardAddBook onSubmit={handleAddBook} />
    </Layout>
  );
};

export default AddBook;
