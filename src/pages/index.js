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

  return (
    <div>
      <div className="carousel-container">
        <div className="left-container">
          {!isPrevButtonDisabled && (
            <div className="carousel-slide slide-left" id="slide-left">
              <h2>
                {content[keys[(currentSlideIndex - 1) % keys.length]].title}
              </h2>
              <h3>
                {content[keys[(currentSlideIndex - 1) % keys.length]].subtitle}
              </h3>
              <p>{content[keys[(currentSlideIndex - 1) % keys.length]].text}</p>
            </div>
          )}
        </div>
        <div className="middle-container">
          <div className="carousel-slide slide-middle" id="slide-middle">
            <h2>{content[keys[currentSlideIndex]].title}</h2>
            <h3>{content[keys[currentSlideIndex]].subtitle}</h3>
            <p>{content[keys[currentSlideIndex]].text}</p>
          </div>
        </div>

        <div className="right-container">
          {!isNextButtonDisabled && (
            <div className="carousel-slide slide-right-1">
              <h2>
                {content[keys[(currentSlideIndex + 1) % keys.length]].title}
              </h2>
              <h3>
                {content[keys[(currentSlideIndex + 1) % keys.length]].subtitle}
              </h3>
              <p>{content[keys[(currentSlideIndex + 1) % keys.length]].text}</p>
            </div>
          )}
          {!isNextButtonDisabled && currentSlideIndex < keys.length - 2 && (
            <div className="carousel-slide slide-right-2">
              <h2>
                {content[keys[(currentSlideIndex + 2) % keys.length]].title}
              </h2>
              <h3>
                {content[keys[(currentSlideIndex + 2) % keys.length]].subtitle}
              </h3>
              <p>{content[keys[(currentSlideIndex + 2) % keys.length]].text}</p>
            </div>
          )}
        </div>
      </div>
      <button onClick={moveLeft} disabled={isPrevButtonDisabled}>
        Previous
      </button>
      <button onClick={moveRight} disabled={isNextButtonDisabled}>
        Next
      </button>
    </div>
  );
}
