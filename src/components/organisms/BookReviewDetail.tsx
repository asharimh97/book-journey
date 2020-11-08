import { useParams } from "@reach/router";
import { Flex } from "components/atoms";
import { BookCover, CardBookReview } from "components/molecules/BookDetail";
import SEO from "components/SEO";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookDetailState } from "stores/selectors";
import { bookDetailId } from "stores/states";

type Props = {};

const BookReviewDetail: React.FC<Props> = props => {
  const { id } = useParams();
  const [, setBookId] = useRecoilState(bookDetailId);
  const bookDetail = useRecoilValue(bookDetailState);

  useEffect(() => {
    setBookId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SEO title={bookDetail?.title} />
      <Flex
        justifyContent={["flex-start", null, "space-between"]}
        flexDirection={["column", null, "row-reverse"]}
        mx={[-4, null, null, "0px"]}
      >
        <BookCover book={bookDetail} />
        <CardBookReview book={bookDetail} />
      </Flex>
    </>
  );
};

export default BookReviewDetail;
