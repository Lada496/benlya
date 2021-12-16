import Link from "next/link";

const CardLinkContainer = ({ link }) => {
  return (
    <Link href={link}>
      <a
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
        view more
      </a>
    </Link>
  );
};

export default CardLinkContainer;
