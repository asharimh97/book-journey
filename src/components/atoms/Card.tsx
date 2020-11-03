import styled from "styled-components";
import theme from "styles/theme";
import { BaseProp } from "./Base";
import Box from "./Box";

const Card = styled(Box)<BaseProp>`
  border: solid 1px ${theme.colors.black[20]};
  border-radius: 12px;
`;

Card.defaultProps = {
  backgroundColor: "#fff",
  p: 4
};

Card.displayName = "Card";

export default Card;
