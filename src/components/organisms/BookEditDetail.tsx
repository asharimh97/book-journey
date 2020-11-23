import { navigate, useParams } from "@reach/router";
import { themeGet } from "@styled-system/theme-get";
import { Button, Card, Image, Text, Title } from "components/atoms";
import Form from "components/molecules/Inputs/Form";
import Input from "components/molecules/Inputs/Input";
import Textarea from "components/molecules/Inputs/Textarea";
import React, { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "service/firebase";
import { bookDetailState } from "stores/selectors";
import { bookDetailId } from "stores/states";
import styled from "styled-components";

type Props = {};

const CardWrapper = styled(Card)`
  border-color: transparent;
  margin: 0 -24px;
  width: unset;
  max-width: unset;

  ${themeGet("mediaQueries.md")} {
    border-color: ${themeGet("colors.black.20")};
    margin: auto;
    margin-bottom: 48px;
    max-width: 375px;
  }
`;

const BookEditDetail: React.FC<Props> = ({ ...props }) => {
  const { id } = useParams();
  const { addToast } = useToasts();
  const [, setBookId] = useRecoilState(bookDetailId);
  const bookDetail = useRecoilValue(bookDetailState);

  useEffect(() => {
    setBookId(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditBook = async (val: any, e: any) => {
    const data = {
      ...val
    };

    const bookRef = db.collection("books").doc(id);

    // edit book
    bookRef
      .set(data, { merge: true })
      .then(() => {
        addToast("Success edit book!", {
          appearance: "success",
          autoDismiss: true
        });

        // redirect
        navigate(`/book/${id}`);
      })
      .catch(err => {
        addToast("Oops! An error occurred", {
          appearance: "error",
          autoDismiss: true
        });
      });
  };

  return (
    <CardWrapper>
      <Form defaultValues={bookDetail || {}} onSubmit={handleEditBook}>
        <Title as="h4" mt={0} mb={3}>
          Edit Book
        </Title>
        <Text>
          Made mistake while adding a book? No problem, that's why I'm here to
          edit
        </Text>
        <Input name="title" label="Title" type="text" />
        <Input name="author" label="Author" type="text" />
        <Input name="read_at" label="Date finished read" type="date" />
        <Textarea name="review" label="My review" />
        <Image
          alt={bookDetail?.title}
          src={bookDetail?.cover}
          autofit
          width={96}
          height={96}
          rounded
          mb={3}
        />
        {/* <InputImage name="cover" label="Cover" /> */}
        <Button
          type="submit"
          color="orange"
          block
          colorType="gradient"
          style={{ justifyContent: "center" }}
        >
          Edit book
        </Button>
      </Form>
    </CardWrapper>
  );
};

export default BookEditDetail;
