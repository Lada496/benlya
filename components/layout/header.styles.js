import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Link from "next/link";

export const HeaderContainer = styled.header`
  background-color: black;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 8rem auto 8rem;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  font-family: "Italiana", serif;
  font-size: 2.5rem;
  color: white;
  display: block;
  text-align: center;
  &:hover {
    color: white;
    text-decolation: underline;
    cursor: pointer;
  }
`;

export const IconContainer = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 0.5rem;
  padding: 0;
`;
