import styled, { css } from "styled-components";
import theme from "styles/theme";
import Text, { TextProp } from "./Text";

const titleStyle: Record<string, any> = {
  h1: { fontSize: theme.fontSizes[6] },
  h2: { fontSize: theme.fontSizes[5] },
  h3: { fontSize: theme.fontSizes[4] },
  h4: { fontSize: theme.fontSizes[3] },
  h5: { fontSize: theme.fontSizes[2] }
};

const Title = styled(Text)<TextProp>`
  ${props =>
    props.as &&
    css`
      ${titleStyle[props.as]}
    `}
`;

Title.displayName = "Title";

Title.defaultProps = {
  as: "h1",
  lineHeight: "1.15",
  my: "1.25em"
};

export default Title;
