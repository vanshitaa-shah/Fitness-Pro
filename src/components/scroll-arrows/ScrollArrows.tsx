import React, { useEffect, useState } from "react";
import "./ScrollArrows.scss";

const ScrollArrows = ({ list }: { list?: HTMLCollectionOf<Element> }) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const itemWidth = 200;

  useEffect(() => {
    if (list) {
      const handleScroll = () => {
        setIsPrevDisabled(list[0].scrollLeft === 0);
        setIsNextDisabled(
          list[0].scrollLeft >= list[0].scrollWidth - list[0].clientWidth - 50
        );
      };

      list[0].addEventListener("scroll", handleScroll);
    }
  }, [list]);

  const goToNext = () => {
    if (list) list[0].scrollTo(list[0].scrollLeft + itemWidth * 2, 0);
  };

  const goToPrevious = () => {
    if (list) list[0].scrollTo(list[0].scrollLeft - itemWidth * 2, 0);
  };
  return (
    <div className="arrows flex">
      <p onClick={goToPrevious} className={isPrevDisabled ? "disabled" : ""}>
        &larr;
      </p>
      <p onClick={goToNext} className={isNextDisabled ? "disabled" : ""}>
        &rarr;
      </p>
    </div>
  );
};

export default ScrollArrows;
