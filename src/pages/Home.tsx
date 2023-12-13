import { Button } from "antd";
import ArrowDown from "../components/hero-section/ArrowDown";
import HeroContent from "../components/hero-section/HeroContent";
import HeroImg from "../components/hero-section/HeroImg";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="container flex section-hero">
          <HeroContent />
          <HeroImg />
        </section>
        <ArrowDown />
      </Layout>
    </>
  );
};

export default Home;
