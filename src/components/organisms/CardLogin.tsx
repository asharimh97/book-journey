import { themeGet } from "@styled-system/theme-get";
import { Button, Card, Text, Title } from "components/atoms";
import Form from "components/molecules/Inputs/Form";
import Input from "components/molecules/Inputs/Input";
import React from "react";
import styled from "styled-components";

type Props = {
  onSubmit: Function | {};
};

const CardWrapper = styled(Card)`
  border-color: transparent;
  margin: 0 -24px;
  margin-top: 64px;
  width: unset;
  max-width: unset;

  ${themeGet("mediaQueries.md")} {
    border-color: ${themeGet("colors.black.20")};
    margin: 64px auto 0;
    max-width: 375px;
  }
`;

const CardLogin: React.FC<Props> = ({ onSubmit }) => {
  return (
    <CardWrapper>
      <Form onSubmit={onSubmit}>
        <Title as="h4" mt={0}>
          Welcome back
        </Title>
        <Text>
          Welcome back, <strong>Ashari!</strong>
          <br />
          How's your day? Enter password to login
        </Text>
        <Input name="password" placeholder="Password" type="password" mb={3} />
        <Button type="submit" color="orange" size="small">
          Login
        </Button>
      </Form>
    </CardWrapper>
  );
};

export default CardLogin;
