import { Flex, Image } from "components/atoms";
import React, { useState } from "react";
import styled from "styled-components";
import theme from "styles/theme";
import Label from "./Label";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: any;
  errors?: Record<string, any>;
  [key: string]: any;
};

type LabelProps = React.InputHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
};

const InputWrapper = styled(Flex).attrs({
  as: "label"
})<LabelProps>`
  align-items: center;
  border: solid 1px ${theme.colors.black[20]};
  border-radius: 8px;
  cursor: pointer;
  height: 96px;
  justify-content: center;
  margin-bottom: 16px;
  padding: 8px;
  width: 96px;
`;

const InputFile = styled.input.attrs({
  type: "file"
})`
  display: none;
  height: 1px;
  width: 1px;
`;

const InputImage: React.FC<Props> = ({
  name,
  label,
  register,
  errors,
  ...props
}) => {
  const [imgUrl, setImgUrl] = useState("");

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    // set preview
    setImgUrl(url);
  };

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper htmlFor={name}>
        {imgUrl ? (
          <Image src={imgUrl} width="100%" height="100%" autofit rounded />
        ) : (
          <div>+</div>
        )}
      </InputWrapper>
      <InputFile name={name} id={name} onChange={handleChange} ref={register} />
    </>
  );
};

export default InputImage;
