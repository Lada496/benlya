import Link from "next/link";
import { Card } from "react-bootstrap";

const CardLinkContainer = ({ link }) => {
  return (
    <Card.Link
      style={{
        textTransform: "uppercase",
        display: "block",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        bottom: "1rem",
        transform: "translate(-50%, 0)",
        fontSize: "0.9rem",
      }}
    >
      <Link href={link}>view more</Link>
    </Card.Link>
  );
};

export default CardLinkContainer;
