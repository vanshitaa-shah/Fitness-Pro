import React from "react";
import "./CommunitySection.scss";
import SectionHeading from "../section-heading/SectionHeading";
import Dumbbel from "../../assets/images/download-page/community-section/dumbbell.png";
import InputComponent from "../input-component/InputComponent";

const CommunityContent = () => {
  return (
    <>
      <img
        className="section-community-img"
        src={Dumbbel}
        alt="Dumbbell image"
      />

      <SectionHeading
        title="Save your time with Stacks"
        heading="Join Stacks Community"
        tagline="Join Stacks community now to get free updates and also alot of freebies are waiting for you."
      />
      <InputComponent />

      <p className="small-600">
        By click sign in you, you agree with Stacks{" "}
        <span className="primary-text">terms</span> and
        <span className="primary-text">policy</span>
      </p>
    </>
  );
};

export default CommunityContent;
