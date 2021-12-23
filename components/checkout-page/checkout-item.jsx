import { useDispatch } from "react-redux";
import Image from "next/image";
import { Row, Col, ListGroupItem } from "react-bootstrap";
import {
  removeItemFromCartAction,
  addItemToCartAction,
  clearItemFromCartAction,
} from "../../redux/cart/cart.actions";
import classes from "./checkout-item.module.css";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItemToCartAction(item));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCartAction(item));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCartAction(item));
  };

  return (
    <ListGroupItem className={classes.row}>
      <Row style={{ padding: "1rem" }} className="align-items-center">
        <Col xs={3}>
          <div className={classes.img}>
            <Image src={item.image} alt={item.title} width={200} height={200} />
            {/* <img src={item.image} alt={item.title} /> */}
          </div>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={10}>
              <h3>${item.price}</h3>
            </Col>
            <Col
              xs={2}
              style={{ fontSize: "1.5rem", padding: "0 1rem" }}
              onClick={clearItemHandler}
            >
              <span className={classes.hover}>&#10005;</span>
            </Col>
          </Row>

          <h4>{item.title}</h4>
          <Row xs="auto">
            <Col onClick={removeItemHandler}>
              <span className={classes.hover}>&#8722;</span>
            </Col>
            <Col>{item.quantity}</Col>
            <Col onClick={addItemHandler}>
              <span className={classes.hover}>&#43;</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CheckoutItem;