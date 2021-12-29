import React, { useState, useEffect, useRef } from "react";
import {
  SliderContainer,
  Slider,
  ImageContainer,
  TextContainer,
  DotsContainer,
  DotContainer,
} from "./advertisement.styles";

const Ads = [
  {
    id: 1,
    imageUrl: "images/ad1.jpg",
    title: "Advertisement1",
    text: "Big Christmas Sale Up To 70% Off",
  },
  {
    id: 2,
    imageUrl: "images/ad2.jpg",
    title: "Advertisement2",
    text: "New Products Now on Sale!",
  },
];
const Advertisement = () => {
  const delay = 5000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % Ads.length),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <SliderContainer>
      <Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {Ads.map((ad) => (
          <ImageContainer key={ad.id} imageUrl={ad.imageUrl}>
            <TextContainer>{ad.text}</TextContainer>
          </ImageContainer>
        ))}
      </Slider>
      <DotsContainer>
        {Ads.map((_, idx) => (
          <DotContainer
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            isActive={index === idx}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default Advertisement;
