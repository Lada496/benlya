"use client";
import styled from "styled-components";
export const ItemContainer = styled.div`
  margin: 6rem auto;
  width: 60%;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
`;
export const TitleContainer = styled.h3`
  font-weight: 400;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

export const TextContainer = styled.p`
  margin-bottom: 3rem;
`;

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.color};
  border: 1px solid black;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  text-align: center;
  display: block;
  width: 80%;
  height: 3rem;
  padding: 0.5rem auto;
  margin: 1rem auto;
  font-family: var(--font-spartan);
`;
