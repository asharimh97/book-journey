import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import Base, { BaseProp } from "./Base";

type GridProp = BaseProp & GridProps;

const Grid = styled(Base)<GridProp>`
  display: grid;
  ${grid}
`;

Grid.displayName = "Grid";

export default Grid;
