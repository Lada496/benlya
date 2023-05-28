import styled from "styled-components";
import Link from "next/link";

export const ShopItemContainer = styled.div`
  background: center / cover no-repeat url(${(props) => props.imageUrl});
  height: 80vh;
  @media (max-width: 1024px) {
    height: 55vh;
  }
  @media (max-width: 767px) {
    height: 80vh;
  }
`;

export const LinkContainer = styled(Link)`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  color: white;
  font-family: var(--font-spartan);
  font-size: 1.3rem;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
