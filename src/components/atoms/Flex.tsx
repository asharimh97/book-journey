import styled from "styled-components";
import { flex, FlexProps } from "styled-system";
import Base, { BaseProp } from "./Base";

type FlexProp = BaseProp & FlexProps;

const Flex = styled(Base)<FlexProp>`
  display: flex;
  ${flex}
`;

Flex.displayName = "Flex";

export default Flex;
