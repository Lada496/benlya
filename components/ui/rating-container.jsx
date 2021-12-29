import { Rating } from "semantic-ui-react";
import { Container } from "./rating-container.styles";

const RatingContainer = ({ rate, count, size }) => {
  return (
    <Container position={true}>
      <Rating defaultRating={rate} maxRating={5} size={size ? size : null} />
      <p>({count})</p>
    </Container>
  );
};

export default RatingContainer;
