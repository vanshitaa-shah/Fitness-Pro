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
import SectionHeading from "../components/section-heading/SectionHeading";
import SectionFeatures from "../components/workout-features/SectionFeatures";
import ServiceImg from "../assets/images/services-section/service.png";
import Services from "../components/services-section/Services";
import { useEffect, useState } from "react";
import SectionTrainers from "../components/trainers-section/SectionTrainers";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileDevice = window.matchMedia("(max-width: 767px)");
      setIsMobile(mobileDevice.matches);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

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

        <section className="section-new-workouts my-section">
          <div className="container flex py-96">
            <SectionHeading
              title="New workouts added every week"
              heading="A new fitness experience for everyone"
            />
            <SectionFeatures />
          </div>
        </section>

        <section className="container flex section-services my-section">
          <SectionHeading
            title={isMobile ? "our services" : "Fitness Pro"}
            heading={
              isMobile ? "Our Features" : "Simple, powerful, easy-to-use"
            }
            tagline={
              isMobile
                ? "Stacks is a production-ready library of stackable content blocks built in React Native."
                : "Track your workouts, get better results, and be the best version of you. Less thinking, more lifting."
            }
          />
          <div className="bottom-section flex">
            <Services />
            <SectionImg src={ServiceImg} alt="service scene video" />
          </div>
        </section>

        <section className=" container flex section-trainers my-section">
          <SectionHeading
            heading={isMobile ? "Stacks Team" : "Meet our pro trainers"}
            tagline={
              isMobile
                ? "Stacks is a production-ready library of stackable content blocks."
                : "From all over the world, we select and provide you a team of seasoned trainers. What's more, the 1-on-1 live practice mode helps you quickly get great results."
            }
          />
          <SectionTrainers />
        </section>
      </Layout>
    </>
  );
};

export default Home;
