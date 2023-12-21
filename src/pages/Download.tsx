import React from "react";
import SectionContent from "../components/reusable-section/SectionContent";
import SectionImg from "../components/reusable-section/SectionImg";
import Layout from "../layout/Layout";
import Hero from "../assets/images/download-page/hero-section/hero.png";
import InputComponent from "../components/input-component/InputComponent";

const Download = () => {
  return (
    <>
      <Layout>
        <section className="flex section-hero my-section container-right">
          <SectionImg src={Hero} alt="image of watch,bottle and balls" />
          <SectionContent
            title="time to get fitness pro"
            heading="Fitness Pro for
            any device."
            hr={true}
            tagline="Track your workouts, get better results, and be the best version of you. Less thinking, more lifting."
            input={<InputComponent />}
          />
        </section>
      </Layout>
    </>
  );
};

export default Download;
