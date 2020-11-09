import { Box } from "components/atoms";
import React from "react";
import styled from "styled-components";
import { width } from "styled-system";
import theme from "styles/theme";
import Label from "./Label";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: any;
  [key: string]: any;
};

const InputText = styled.input`
  align-items: center;
  border: solid 1px ${theme.colors.black[20]};
  border-radius: 12px;
  display: flex;
  height: 40px;
  padding: 8px 12px;
  width: 100%;

  ${width}
`;

const Input: React.FC<Props> = ({
  name,
  label,
  id,
  placeholder,
  register,
  type,
  ...props
}) => {
  return (
    <Box {...props}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputText
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        ref={register}
      />
    </Box>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
