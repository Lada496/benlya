import { Card } from "react-bootstrap";
import React from "react";

const CardImgContainer = ({
  imageUrl,
  objectFit = "cover",
  height = "25rem",
}) => {
  return (
    <Card.Img
      src={imageUrl}
      style={{ height: `${height}`, objectFit: `${objectFit}` }}
    />
  );
};

export default CardImgContainer;
