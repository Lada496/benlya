import { Row, Col, Card, Button } from "react-bootstrap";
import ColContainer from "../ui/col-container";
const ProductPageComponent = ({ product }) => {
  console.log(product);
  return (
    <Card style={{ maxWidth: "95%", margin: "6rem auto", border: "none" }}>
      <Row>
        <Col md={6} xs={12}>
          <Card.Img
            src={product.image}
            style={{ maxWidth: "25rem", display: "block", margin: "auto" }}
          />
        </Col>
        <Col md={6} xs={12}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ${product.price}
            </Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>

            <Button style={{ textTransform: "uppercase" }} variant="primary">
              Add to cart
            </Button>

            <Button
              style={{ marginLeft: "1.5rem", textTransform: "uppercase" }}
              variant="outline-primary"
            >
              Add to wishlist
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductPageComponent;
