import { themeGet } from "@styled-system/theme-get";
import { Button, Card, Text, Title } from "components/atoms";
import Form from "components/molecules/Inputs/Form";
import Input from "components/molecules/Inputs/Input";
import Textarea from "components/molecules/Inputs/Textarea";
import React from "react";
import styled from "styled-components";

type Props = {
  onSubmit: Function;
};

const CardWrapper = styled(Card)`
  border-color: transparent;
  margin: 0 -24px;
  width: unset;
  max-width: unset;

  ${themeGet("mediaQueries.md")} {
    border-color: ${themeGet("colors.black.20")};
    margin: auto;
    max-width: 375px;
  }
`;

const CardAddBook: React.FC<Props> = ({ onSubmit }) => {
  return (
    <CardWrapper>
      <Form onSubmit={onSubmit}>
        <Title as="h4" mt={0} mb={3}>
          Add new book
        </Title>
        <Text>It's a good thing that you finished another book</Text>
        <Input name="title" label="Title" />
        <Input name="author" label="Author" />
        <Input name="read_at" label="Date finished read" type="date" />
        <Textarea name="review" label="My review" />
        <Button
          type="submit"
          color="orange"
          block
          colorType="gradient"
          style={{ justifyContent: "center" }}
        >
          Add book
        </Button>
      </Form>
    </CardWrapper>
  );
};

export default CardAddBook;
