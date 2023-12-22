import React from "react";

import { ReactComponent as Download } from "../../assets/images/steps-icons/download.svg";
import { ReactComponent as Whistle } from "../../assets/images/steps-icons/whistle.svg";
import { ReactComponent as Goals } from "../../assets/images/steps-icons/goals.svg";
import { ReactComponent as Timer } from "../../assets/images/steps-icons/timer.svg";
import Step from "./step/Step";

const SectionSteps = () => {
  return (
    <div className="section-how-steps ">
      <Step
        Icon={Download}
        step="Step 1"
        title="Download"
        desc="Fitness Pro tracks your workouts, get better results, and be the best version of you."
        color="blue"
      />
      <Step
        Icon={Whistle}
        step="Step 2"
        title="Choose your trainner"
        desc="Fitness Pro tracks your workouts, get better results, and be the best version of you."
        color="purple"
      />
      <Step
        Icon={Goals}
        step="Step 3"
        title="Set the goals"
        desc="Fitness Pro tracks your workouts, get better results, and be the best version of you."
        color="pink"
      />
      <Step
        Icon={Timer}
        step="Step 4"
        title="Workout time"
        desc="Fitness Pro tracks your workouts, get better results, and be the best version of you."
        color="green"
      />
    </div>
  );
};

export default SectionSteps;
