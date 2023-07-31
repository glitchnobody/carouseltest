import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { content } from "./data";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const keys = Object.keys(content);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const moveRight = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % keys.length);
  };

  const moveLeft = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + keys.length) % keys.length
    );
  };

  const isPrevButtonDisabled = currentSlideIndex === 0;
  const isNextButtonDisabled = currentSlideIndex === keys.length - 1;

  const getSlideClass = (index) => {
    if (index === currentSlideIndex) {
      return "slide-middle";
    } else if (
      index === currentSlideIndex - 1 ||
      (currentSlideIndex === 0 && index === keys.length - 1 && keys.length < 1)
    ) {
      return "slide-left";
    } else if (
      index === (currentSlideIndex + 1) % keys.length &&
      keys.length > currentSlideIndex + 1
    ) {
      return "slide-right";
    } else if (
      index === (currentSlideIndex + 2) % keys.length &&
      keys.length > currentSlideIndex + 2
    ) {
      return "slide-right-2";
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {keys.map((key, index) => (
            <div
              className={`carousel-slide ${getSlideClass(index)}`}
              key={index}
            >
              <h2>{content[key].title}</h2>
              <h3>{content[key].subtitle}</h3>
              <p>{content[key].text}</p>
            </div>
          ))}
        </div>
        <div className="carousel_indicators">
          <button
            className="left_button"
            onClick={moveLeft}
            disabled={isPrevButtonDisabled}
          >
            ←
          </button>
          <button
            className="right_button"
            onClick={moveRight}
            disabled={isNextButtonDisabled}
          >
            →
          </button>
        </div>
      </div>
      <div className="story_container"></div>
    </div>
  );
}
