import { Row } from "react-bootstrap";
import React from "react";

const RowContainer = ({ children }) => {
  return <Row style={{ padding: "2rem 7rem" }}>{children}</Row>;
};

export default RowContainer;
