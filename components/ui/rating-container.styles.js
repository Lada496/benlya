import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: ${(props) => (props.position ? "0 0 3rem" : "0 auto 3rem auto")};
  justify-content: center;
  width: fit-content;
`;
