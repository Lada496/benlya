import styled from "styled-components";
export const ItemContainer = styled.div`
  height: 24rem;
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  background: center / contain no-repeat url(${(props) => props.imageUrl});
  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.h3`
  text-align: center;
  font-family: var(--font-spartan);
  font-weight: 400;
  max-width: 90%;
  margin: auto;
  font-size: 1.2rem;
  padding-top: 1rem;
`;
export const PriceContainer = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
`;
export const RatingContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: auto;
  justify-content: center;
  margin-bottom: 3rem;
`;
