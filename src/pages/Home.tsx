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
import Watch from "../assets/images/book-class-section/watch.png";
import SectionCard from "../components/book-class-section/SectionCard";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="container flex section-hero my-section">
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

        <section className="container flex section-featured my-section">
          <div className="section-featured-heading normal">
            Trusted by more than 2M users worldwide
          </div>
          <FeacturedIcons />
        </section>

        <section className="container flex section-how my-section">
          <SectionHeader />
          <SectionSteps />
        </section>

        <section className="container flex section-fitness my-section">
          <SectionContent
            heading="Train smarter, get stronger."
            tagline="   Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀"
            btnPrimary="Start free trial"
          />
          <SectionImg src={Fitness} alt="image of watch,bottle and balls" />
        </section>

        <section className="section-book-class highlighted my-section">
          <div className="container flex py-96">
            <SectionImg src={Watch} alt="a" />
            <SectionCard />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
