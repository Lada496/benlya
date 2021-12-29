import styled from "styled-components";
export const SliderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  //   max-width: 100%;
  height: 40vh;
  @media (max-width: 500px) {
    height: 80vh;
  }
`;
export const Slider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: center / cover no-repeat url(${(props) => props.imageUrl});
`;
export const SlideContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.h2`
  display: block;
  width: fit-content;
  padding: 0.5rem 1rem;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  margin: auto;
  background-color: #999;
  color: white;
  font-weight: 600;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-contant: center;
  gap: 0.5rem;
`;
export const DotContainer = styled.div`
  height: 0.9rem;
  width: 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.9)};
`;
