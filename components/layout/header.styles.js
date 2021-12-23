import styled from "styled-components";
import { Icon } from "semantic-ui-react";

export const HeaderContainer = styled.header`
  background-color: black;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.a`
  font-family: "Italiana", serif;
  font-size: 2.5rem;
  color: white;
  display: block;
`;

export const NavContainer = styled.ul`
  display: flex;
  gap: 0.5rem;
`;
