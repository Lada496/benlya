import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem auto 0;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

  button {
    margin: 50px 0 0 auto;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 2rem;
`;
