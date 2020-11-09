import { Text } from "components/atoms";
import { TextProp } from "components/atoms/Text";
import styled from "styled-components";

type Props = TextProp & {
  htmlFor?: string;
};

const Label = styled(Text).attrs({
  as: "label",
  fontSize: 0,
  semibold: true,
  color: "black.primary"
})<Props>`
  display: block;
  margin-bottom: 8px;
`;

export default Label;
