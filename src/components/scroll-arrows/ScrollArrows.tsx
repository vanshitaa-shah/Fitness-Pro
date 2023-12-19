import React, { useEffect, useState } from "react";
import "./ScrollArrows.scss";

const ScrollArrows = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const list = document.getElementsByClassName("section-trainers-grid");
  const itemWidth = 200;

  useEffect(() => {
    const handleScroll = () => {
      setIsPrevDisabled(list[0].scrollLeft === 0);
      setIsNextDisabled(
        list[0].scrollLeft >= list[0].scrollWidth - list[0].clientWidth - 50
      );
    };

    list[0].addEventListener("scroll", handleScroll);
    return () => {
      list[0].removeEventListener("scroll", handleScroll);
    };
  }, [list]);

  const goToNext = () => {
    list[0].scrollTo(list[0].scrollLeft + itemWidth * 2, 0);
  };

  const goToPrevious = () => {
    list[0].scrollTo(list[0].scrollLeft - itemWidth * 2, 0);
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
