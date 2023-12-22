import React from "react";
import { Button } from "antd";
import SectionContent from "../components/reusable-section/SectionContent";
import SectionImg from "../components/reusable-section/SectionImg";
import Layout from "../layout/Layout";
import Hero from "../assets/images/download-page/hero-section/hero.png";
import InputComponent from "../components/input-component/InputComponent";
import Platforms from "../components/platform-section/Platforms";
import CommunityContent from "../components/community-section/CommunityContent";

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

        <section className="container section-platform flex my-section">
          <h2>Choose the plaform</h2>
          <Platforms />
          <Button>Contact Us</Button>
        </section>

        <section className="container section-community flex my-section">
          <CommunityContent />
        </section>
      </Layout>
    </>
  );
};

export default Download;
