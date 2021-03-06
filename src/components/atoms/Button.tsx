/* eslint-disable max-len */
import styled, { css } from "styled-components";
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from "styled-system";
import theme from "styles/theme";

const buttonSizes = {
  small: { height: "36px" },
  medium: { height: "42px" },
  big: { height: "56px" }
};

const colors = ["orange", "red", "green", "blue"] as const;
const colorTypes = ["solid", "gradient"] as const;

type ButtonSizes = keyof typeof buttonSizes;

type ButtonColors = typeof colors[number];

type ButtonProp = BorderProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps & {
    theme?: any;
    block?: boolean;
    disabled?: boolean;
    color?: ButtonColors;
    colorType?: typeof colorTypes[number];
    rounded?: boolean;
    size?: ButtonSizes;
    // [key: string]: any;
  };

type ButtonStyle = {
  [P in typeof colorTypes[number]]: {
    [Q in ButtonColors]: Record<string, any>;
  };
};

const buttonStyles: ButtonStyle = {
  solid: {
    red: { background: theme.colors.red.primary },
    orange: { background: theme.colors.orange.primary },
    blue: { background: theme.colors.blue.primary },
    green: { background: theme.colors.green.primary }
  },
  gradient: {
    orange: {
      background: `linear-gradient(261.43deg, ${theme.colors.orange.primary} 8.58%, ${theme.colors.orange.secondary} 95.87%)`,
      boxShadow: "1px 4px 10px rgba(255, 155, 33, 0.7)"
    },
    blue: {
      background: `linear-gradient(261.43deg, ${theme.colors.blue.primary} 8.58%, ${theme.colors.blue.secondary} 95.87%)`,
      boxShadow: "1px 4px 10px rgba(28, 183, 252, 0.7)"
    },
    green: {
      background: `linear-gradient(261.43deg, ${theme.colors.green.primary} 8.58%, ${theme.colors.green.secondary} 95.87%)`,
      boxShadow: "1px 4px 10px rgba(59, 222, 136, 0.7)"
    },
    red: {
      background: `linear-gradient(261.43deg, ${theme.colors.red.primary} 8.58%, ${theme.colors.red.secondary} 95.87%)`,
      boxShadow: "1px 4px 10px rgba(254, 129, 139, 0.7)"
    }
  }
};

const rounded = (props: ButtonProp) =>
  props.rounded &&
  css`
    border-radius: calc(${buttonSizes[props.size || "medium"].height} / 2);
  `;

const block = (props: ButtonProp) => props.block && { width: "100%" };

const Button = styled.button<ButtonProp>`
  align-items: center;
  border: transparent;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: "Proxima Nova Bold", ${props => props.theme.font};
  font-size: 16px;
  font-weight: 700;
  padding-left: 20px;
  padding-right: 20px;

  ${({ size }) => size && buttonSizes[size as ButtonSizes]};

  ${props =>
    props.color && buttonStyles[props.colorType || "solid"][props.color]};

  ${rounded};
  ${block};

  ${border}
  ${layout}
  ${position}
  ${space}
  ${shadow}
`;

Button.defaultProps = {
  color: "orange",
  colorType: "solid",
  size: "medium"
};

Button.displayName = "Button";

export default Button;
