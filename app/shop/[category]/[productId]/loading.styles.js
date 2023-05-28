import styled, { keyframes } from "styled-components";
const pulseAnimation = keyframes`
  0% {
    background-color: #f3f3f3;
  }
  50% {
    background-color: #ececec;
  }
  100% {
    background-color: #f3f3f3;
  }
`;

export const LoadingContainer = styled.div`
  margin: 6rem auto;
  width: 60%;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const ImageSkeleton = styled.div`
  width: 90%;
  height: 400px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
  animation: ${pulseAnimation} 1.5s infinite;
`;

export const BarSkeleton = styled.div`
  height: 1.2rem;
  width: 100%;
  background-color: #e5e5e5;
  margin-bottom: 0.5rem;
`;

export const MiddleBarSkeleton = styled.div`
  height: 2rem;
  width: 50%;
  background-color: #e5e5e5;
  margin-bottom: 2rem;
`;

export const LargeBarSkeleton = styled.div`
  height: 2.5rem;
  width: 100%;
  background-color: #e5e5e5;
  margin-bottom: 2rem;
`;

export const ButtonSkeleton = styled.button`
  background-color: #e5e5e5;
  border: #e5e5e5;
  width: 80%;
  height: 3rem;
  padding: 0.5rem auto;
  margin: 1rem auto;
  animation: ${pulseAnimation} 1.5s infinite;
  font-family: var(--font-spartan);
`;
