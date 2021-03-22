import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  [key: string]: any;
};

const SEO: React.FC<Props> = ({ title, description, image, url, ...props }) => {
  return (
    <Helmet>
      <title>{title ? `${title} - ` : ""}Book Journey</title>
      {title && [
        <meta property="og:title" key={`title-0`} content={title} />,
        <meta property="twitter:title" key={`title-1`} content={title} />
      ]}
      {description && [
        <meta name="description" key={`desc-0`} content={description} />,
        <meta property="og:description" key={`desc-1`} content={description} />,
        <meta name="twitter:description" key={`desc-2`} content={description} />
      ]}
      {image && [
        <meta property="og:image" key={`image-0`} content={image} />,
        <meta property="twitter:image" key={`image-1`} content={image} />
      ]}
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};

export default SEO;
