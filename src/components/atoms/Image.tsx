import React from "react";
import styled from "styled-components";
import { border } from "styled-system";
import { convertNumberToPixel } from "utils/helpers";
import { BaseProp } from "./Base";
import Box from "./Box";

const ROUND_RADIUS = "12px";

type ImageProp = BaseProp &
  Pick<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
    rounded?: boolean;
    fullRounded?: boolean;
    autofit?: boolean;
    // this type to handle unlisted props
    [key: string]: any;
  };

const rounded = (props: ImageProp) =>
  props.rounded && { borderRadius: ROUND_RADIUS };

const fullRounded = (props: ImageProp) =>
  props.fullRounded && {
    borderRadius: `calc(${convertNumberToPixel(props.height)} / 2)`
  };

const Img = styled(Box).attrs<ImageProp>({
  as: "img"
})<ImageProp>`
  display: block;
  ${rounded}
  ${fullRounded}
`;

const Wrapper = styled(Box)<ImageProp>`
  position: relative;
  ${rounded}
  ${fullRounded}
`;

const ImgFit = styled("img")<ImageProp>`
  object-position: center;
  object-fit: cover;
  height: 100%;
  position: absolute;
  width: 100%;

  ${border}
  ${rounded}
  ${fullRounded}
`;

const Image: React.FC<ImageProp> = ({ alt, src, autofit, ...props }) => {
  return autofit ? (
    <Wrapper {...props}>
      <ImgFit src={src} alt={alt} {...props} />
    </Wrapper>
  ) : (
    <Img src={src} alt={alt} {...props} />
  );
};

Image.displayName = "Image";

export default Image;
