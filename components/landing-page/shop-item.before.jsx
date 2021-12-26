import { Card } from "react-bootstrap";
import ColContainer from "../ui/col-container";
import CardImgContainer from "../ui/card-img-container";
import CardLinkContainer from "../ui/card-link-container";

const ShopItem = ({ item }) => {
  return (
    <ColContainer>
      <Card style={{ height: "31.5rem" }}>
        <CardImgContainer imageUrl={item.imageUrl} />
        <Card.Body>
          <Card.Title
            style={{ textTransform: "uppercase", textAlign: "center" }}
          >
            {item.title}
          </Card.Title>
          <CardLinkContainer link={`/shop/${item.path}`} />
        </Card.Body>
      </Card>
    </ColContainer>
  );
};

export default ShopItem;
