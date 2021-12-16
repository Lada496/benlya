import { withRouter } from "next/router";
import { Card } from "react-bootstrap";
import { pathFinder } from "../../lib/categories-utils";
import ColContainer from "../ui/col-container";
import CardImgContainer from "../ui/card-img-container";
import CardLinkContainer from "../ui/card-link-container";

const ProductItem = ({ item }) => {
  const categoryPath = pathFinder(item.category);
  return (
    <ColContainer>
      <Card style={{ height: "24rem", padding: "1rem 0.5rem" }}>
        <CardImgContainer
          imageUrl={item.image}
          objectFit="contain"
          height="10rem"
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "1rem" }}>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <CardLinkContainer link={`/shop/${categoryPath}/${item.id}`} />
        </Card.Body>
      </Card>
    </ColContainer>
  );
};

export default withRouter(ProductItem);
