import React from "react";
import "./Statistic.scss";

export interface StatisticProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  heading: string;
  headline: string;
  tagline: string;
}

const Statistic = ({ Icon, heading, headline, tagline }: StatisticProps) => {
  return (
    <div className="statistic ">
      <div className="statistic-header flex">
        <Icon />
        <h1>{heading}</h1>
      </div>

      <div className="statistic-footer flex">
        <p className="normal headline">{headline}</p>

        <p className="small-light tagline">{tagline}</p>
      </div>
    </div>
  );
};

export default Statistic;
