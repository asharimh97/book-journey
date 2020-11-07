import { themeGet } from "@styled-system/theme-get";
import { Image } from "components/atoms";
import React from "react";
import styled from "styled-components";

type Props = {
  book: Record<string, any>;
};

const ImageCover = styled(Image)`
  ${themeGet("mediaQueries.md")} {
    margin-right: 24px;
    border-radius: 12px;
  }

  ${themeGet("mediaQueries.lg")} {
    margin-right: 0;
  }
`;

const BookCover: React.FC<Props> = ({ book: bookDetail }) => {
  return (
    <ImageCover
      data-testid="book-cover"
      src={bookDetail?.cover}
      alt={bookDetail?.title}
      width={["100%", null, 215]}
      pt={["100%", null, 295]}
      height={0}
      autofit
    />
  );
};

export default BookCover;
