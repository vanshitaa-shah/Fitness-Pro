import { Button } from "antd";
import FeacturedIcons from "../components/featured-section/FeacturedIcons";
import ArrowDown from "../components/reusable-section/ArrowDown";
import SectionContent from "../components/reusable-section/SectionContent";
import SectionImg from "../components/reusable-section/SectionImg";
import Layout from "../layout/Layout";
import SectionHeader from "../components/how-works-section/SectionHeader";
import SectionSteps from "../components/how-works-section/SectionSteps";
import Hero from "../assets/images/hero-section/hero.png";
import Fitness from "../assets/images/fitness-section/fitness.png";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="container flex section-hero my-48">
          <SectionContent
            title="Train smarter. get stronger"
            heading="Simple fitness experience for everyone."
            tagline="   Track your workouts, get better results, and be the best version of you.
            Less thinking, more lifting."
            btnPrimary="Download App"
            btnDefault="Book a Class"
          />
          <SectionImg src={Hero} alt="image of watch,bottle and balls" />
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

        <section className="container flex section-fitness my-48">
          <SectionContent
            heading="Train smarter, get stronger."
            tagline="   Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀"
            btnPrimary="Start free trial"
          />
          <SectionImg src={Fitness} alt="image of watch,bottle and balls" />
        </section>
      </Layout>
    </>
  );
};

export default Home;
