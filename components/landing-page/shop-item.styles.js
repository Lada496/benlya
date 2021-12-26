import styled from "styled-components";

export const ShopItemContainer = styled.div`
  background: center / cover no-repeat url(${(props) => props.imageUrl});
  height: 80vh;
`;

export const LinkContainer = styled.a`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  color: white;
  font-family: "Spartan", sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
