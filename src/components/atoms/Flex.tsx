import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";
import Base, { BaseProp } from "./Base";

type FlexProp = BaseProp & FlexboxProps;

const Flex = styled(Base)<FlexProp>`
  display: flex;
  ${flexbox}
`;

Flex.displayName = "Flex";

export default Flex;
