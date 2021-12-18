import Link from "next/link";
import { NavDropdown } from "react-bootstrap";

const DropdownItem = ({ category, index, length }) => {
  return (
    <>
      <Link href={`/shop/${category.path}`}>
        <a
          style={{
            textTransform: "capitalize",
            color: "#212529",
            paddingLeft: "0.5rem",
            display: "block",
          }}
        >
          {category.title}
        </a>
      </Link>
      {index !== length - 1 && <NavDropdown.Divider />}
    </>
  );
};

export default DropdownItem;
