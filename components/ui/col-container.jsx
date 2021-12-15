import { Col } from "react-bootstrap";

const ColContainer = ({ children }) => {
  return (
    <Col lg={3} sm={6} xs={12} style={{ margin: "0.7rem 0" }}>
      {children}
    </Col>
  );
};

export default ColContainer;
