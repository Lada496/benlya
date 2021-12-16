import { Card, ListGroup, Alert } from "react-bootstrap";
import CheckoutButton from "./checkout-button";
import CheckoutItem from "./checkout-item";
import classes from "./checkout-list.module.css";

const CheckoutList = ({ list }) => {
  const totalPrice = list.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className={classes.container}>
      <Card style={{ maxWidth: "500px", margin: "auto" }}>
        <ListGroup>
          {list.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </ListGroup>
        <Card.Footer style={{ fontSize: "1.5rem", fontWeight: 500 }}>
          <div className="d-flex justify-content-between">
            <div>Total: ${totalPrice}</div>
            <div>
              <CheckoutButton price={totalPrice} />
            </div>
          </div>
        </Card.Footer>
      </Card>
      <Alert variant="warning" style={{ marginTop: "2rem" }}>
        * Use the following test credit cart for payment *
        <br />
        4242 4242 4242 4242 - Exp: future date - CVC: 123
      </Alert>
    </div>
  );
};

export default CheckoutList;
