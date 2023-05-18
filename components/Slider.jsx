import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.css";
import Link from "next/link";

const slidesData = [
  {
    image: "/slideone.png",
    title: "Currently leasing",
    description: "For our Conway, Arkansas location that opens winter 2023!",
    buttonText: "GET STARTED",
    link: "/slide1",
  },
  {
    title: "Looking for a new salon professional",
    image: "/slidetwo.png",
    description: "Checkout our Gallery of Stylish and services they offer!",
    buttonText: "OUR GALLERY",
    link: "/slide2",
  },
  {
    image: "/sthree.png",
    title: "We are here to help!",
    description: "",
    buttonText: "CONTACT US",

    link: "/slide3",
  },
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((current) => (current + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSlideClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className={styles.slider_container}>
      <div className={styles.slider}>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlideIndex ? styles.active : ""
              }`}
            onClick={() => handleSlideClick(index)}
          >
            <div className={styles.slide_content}>
              <div className={styles.slideInnerContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className={styles.mybtn}><Link href={slide.link}>{slide.buttonText}</Link></button>

              </div>
            </div>
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slidesData.map((slide, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlideIndex ? styles.active : ""
              }`}
            onClick={() => handleSlideClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
