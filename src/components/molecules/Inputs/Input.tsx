import { themeGet } from "@styled-system/theme-get";
import { Box, Text } from "components/atoms";
import React from "react";
import styled from "styled-components";
import { width } from "styled-system";
import theme from "styles/theme";
import Label from "./Label";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: any;
  errors?: Record<string, any>;
  [key: string]: any;
};

const InputText = styled.input`
  align-items: center;
  border: solid 1px ${theme.colors.black[20]};
  border-radius: 8px;
  display: flex;
  font-family: ${themeGet("font")};
  height: 40px;
  padding: 8px 12px;
  width: 100%;

  ${width}
`;

const Input: React.FC<Props> = ({
  name = "",
  label,
  placeholder,
  register,
  errors,
  type,
  ...props
}) => {
  return (
    <Box {...props}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputText
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        ref={register}
      />
      {errors?.[name] && (
        <Text fontSize={0} color="red.primary">
          {errors?.[name]?.message}
        </Text>
      )}
    </Box>
  );
};

Input.defaultProps = {
  type: "text",
  mb: 2
};

export default Input;
