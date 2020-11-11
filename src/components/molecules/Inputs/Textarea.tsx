import { themeGet } from "@styled-system/theme-get";
import { Box } from "components/atoms";
import React from "react";
import styled from "styled-components";
import { width } from "styled-system";
import Label from "./Label";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: any;
  errors?: Record<string, any>;
  [key: string]: any;
};

const StyledTextarea = styled.textarea`
  border: solid 1px ${themeGet("colors.black.20")};
  border-radius: 8px;
  font-family: ${themeGet("font")};
  height: 100%;
  min-height: 80px;
  padding: 8px 12px;
  min-width: 100%;
  max-width: 100%;

  ${width}
`;

const Textarea: React.FC<Props> = ({
  label,
  name,
  register,
  errors,
  placeholder,
  ...props
}) => {
  return (
    <Box {...props}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledTextarea
        name={name}
        id={name}
        placeholder={placeholder}
      ></StyledTextarea>
    </Box>
  );
};

Textarea.defaultProps = {
  mb: 2
};

export default Textarea;
