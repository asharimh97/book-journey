import { useParams } from "@reach/router";
import { Flex } from "components/atoms";
import Layout from "components/Layout";
import { BookCover, CardBookReview } from "components/molecules/BookDetail";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookDetailState } from "stores/selectors";
import { bookDetailId } from "stores/states";

const BookDetail: React.FC = () => {
  const params = useParams();
  const [, setBookId] = useRecoilState(bookDetailId);
  const bookDetail = useRecoilValue(bookDetailState);

  useEffect(() => {
    setBookId(params.id);
    console.log(bookDetail);
    console.log(new Date(bookDetail?.read_at));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={bookDetail?.title}>
      <Flex
        justifyContent={["flex-start", null, "space-between"]}
        flexDirection={["column", null, "row-reverse"]}
        mx={[-4, null, null, "0px"]}
      >
        <BookCover book={bookDetail} />
        <CardBookReview book={bookDetail} />
      </Flex>
    </Layout>
  );
};

export default BookDetail;
