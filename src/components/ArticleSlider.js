import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Article.module.css";

const dummy_articles = [
  {
    id: 1,
    img: require("../images/coffee1.jpg"),
    title: "Coffee article 1",
    reference: "reference link 1",
  },
  {
    id: 2,
    img: require("../images/coffee2.jpg"),
    title: "Coffee article 2",
    reference: "reference link 2",
  },
  {
    id: 3,
    img: require("../images/coffee3.jpg"),
    title: "Coffee article 3",
    reference: "reference link 3",
  },
  {
    id: 4,
    img: require("../images/coffee4.jpg"),
    title: "Coffee article 4",
    reference: "reference link 4",
  },
  {
    id: 5,
    img: require("../images/coffee5.jpg"),
    title: "Coffee article 5",
    reference: "reference link 5",
  },
  {
    id: 6,
    img: require("../images/coffee6.jpg"),
    title: "Coffee article 6",
    reference: "reference link 6",
  },
];

const ArticleSlider = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [fadeItems, setFadeItems] = useState(false);
  const itemsPerPage = 3;
  const visibleArticles = dummy_articles.slice(
    currentStartIndex,
    currentStartIndex + itemsPerPage
  );

  const handlePrev = () => {
    const newStartIndex =
      currentStartIndex - itemsPerPage < 0
        ? dummy_articles.length - itemsPerPage
        : currentStartIndex - itemsPerPage;
    setCurrentStartIndex(newStartIndex);
    setFadeItems(true);
    setTimeout(() => setFadeItems(false), 50);
  };

  const handleNext = () => {
    const newStartIndex =
      currentStartIndex + itemsPerPage >= dummy_articles.length
        ? 0
        : currentStartIndex + itemsPerPage;
    setCurrentStartIndex(newStartIndex);
    setFadeItems(true);
    setTimeout(() => setFadeItems(false), 50);
  };

  return (
    <div className={styles["slider-container"]}>
      <button
        className={`${styles["prev-button"]} ${styles.icon}`}
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      <div className={styles["slider-items"]}>
        {visibleArticles.map((article, index) => (
          <div
            key={article.id}
            className={`${styles["slider-item"]} ${
              fadeItems ? styles["fade-out"] : ""
            }`}
          >
            <div className={styles["slider-image"]}>
              <img src={article.img} alt={`Article ${article.id}`} />
            </div>
            <h2>{article.title}</h2>
            <a
              href={article.reference}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis sem et nibh gravida consectetur ut eget libero. In bibendum
              nibh vitae mauris dignissim
            </a>
          </div>
        ))}
      </div>

      <button
        className={`${styles["next-button"]} ${styles.icon}`}
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ArticleSlider;
