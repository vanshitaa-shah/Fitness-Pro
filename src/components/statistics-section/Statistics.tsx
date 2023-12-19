import React from "react";
import { ReactComponent as Users } from "../../assets/images/statistics-section/users.svg";
import { ReactComponent as Downloads } from "../../assets/images/statistics-section/downloads.svg";
import { ReactComponent as Countries } from "../../assets/images/statistics-section/countries.svg";
import { ReactComponent as Facebook } from "../../assets/images/statistics-section/facebook.svg";
import Statistic, { StatisticProps } from "./Statistic";
import "./Statistic.scss";

const statisticsData: StatisticProps[] = [
  {
    Icon: Users,
    heading: "1m",
    headline: "Happy Users",
    tagline:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    Icon: Downloads,
    heading: "1.2m",
    headline: "Downloads",
    tagline:
      "Stacks is a production-ready library of stackable content blocks built in React Native. ",
  },
  {
    Icon: Countries,
    heading: "50+",
    headline: "Countries",
    tagline:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    Icon: Facebook,
    heading: "900k+",
    headline: "Likes on Facebook",
    tagline:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
];

const Statistics = () => {
  return (
    <div className="container statistics flex">
      {statisticsData.map((stat) => (
        <Statistic
          Icon={stat.Icon}
          heading={stat.heading}
          headline={stat.headline}
          tagline={stat.tagline}
        />
      ))}
    </div>
  );
};

export default Statistics;
