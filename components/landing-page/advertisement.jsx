import { Carousel, Image } from "react-bootstrap";

const Advertisement = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ maxHeight: "75vh" }}>
        <Image src="images/ad1.jpg" alt="Advertisement1" fluid />
        <Carousel.Caption>
          <h3>Big Christmas Sale Up To 70% Off</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: "75vh" }}>
        <Image src="images/ad2.jpg" alt="Advertisement2" fluid />
        <Carousel.Caption>
          <h3 style={{ color: "#6c757d" }}>New Products Now on Sale!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Advertisement;
