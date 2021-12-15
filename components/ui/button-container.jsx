import { Button } from "react-bootstrap";

const ButtonContainer = ({
  text,
  clickHandler,
  styles,
  varient = "primary",
}) => {
  return (
    <Button
      onClick={clickHandler}
      style={{
        textTransform: "uppercase",
        fontSize: "0.75rem",
        padding: "0.2rem 0.4rem",
        ...styles,
      }}
      variant={varient}
    >
      {text}
    </Button>
  );
};

export default ButtonContainer;
