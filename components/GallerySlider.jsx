import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/GallerySlider.module.css"

const GallerySlider = ({ galleryData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  const totalItems = galleryData.length;
  const itemsPerPage = 3;

  useEffect(() => {
    const updateVisibleItems = () => {
      const startIndex = currentIndex % totalItems;
      const endIndex = (startIndex + itemsPerPage) % totalItems;
      const newVisibleItems = galleryData.slice(startIndex, endIndex);
      setVisibleItems(newVisibleItems);
    };

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    updateVisibleItems();

    return () => clearInterval(interval);
  }, [currentIndex, totalItems, itemsPerPage, galleryData]);

  return (
    <div className={styles.sliderContainer}>
      {visibleItems.map((item, index) => (
        <div className={styles.sliderItem} key={index}>
          <div className={styles.coverImage}>
            <Image src={item.coverImage} alt={`Item ${item.itemNo}`} width={390} height={450} />
          </div>
          <div className={styles.itemContent}>
            <p>{item.itemNo}</p>
            <h2>{item.itemTitle}</h2>
            <p>{item.itemDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySlider;
