import styled from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from "styled-system";

export type BaseProp = SpaceProps &
  BorderProps &
  LayoutProps &
  ColorProps &
  BackgroundProps &
  PositionProps &
  ShadowProps;

const Base = styled.div<BaseProp>`
  ${background}
  ${border}
  ${color}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

Base.displayName = "Base";

export default Base;
