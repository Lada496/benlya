import { Row } from "react-bootstrap";

const RowContainer = ({ children }) => {
  return <Row style={{ padding: "2rem 7rem" }}>{children}</Row>;
};

export default RowContainer;
