import { Button } from "antd";
import FeacturedIcons from "../components/featured-section/FeacturedIcons";
import ArrowDown from "../components/hero-section/ArrowDown";
import HeroContent from "../components/hero-section/HeroContent";
import HeroImg from "../components/hero-section/HeroImg";
import Layout from "../layout/Layout";
import SectionHeader from "../components/how-works-section/SectionHeader";
import SectionSteps from "../components/how-works-section/SectionSteps";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="container flex section-hero my-48">
          <HeroContent />
          <HeroImg />
        </section>
        <ArrowDown />

        <section className="container flex section-featured my-48">
          <div className="section-featured-heading">
            Trusted by more than 2M users worldwide
          </div>
          <FeacturedIcons />
        </section>

        <section className="container flex section-how my-48">
          <SectionHeader />
          <SectionSteps />
        </section>
      </Layout>
    </>
  );
};

export default Home;
