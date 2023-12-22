import { ReactComponent as Calories } from "../../assets/images/workout-features/calories.svg";
import { ReactComponent as Accessfeature } from "../../assets/images/workout-features/access-feature.svg";
import { ReactComponent as Timer } from "../../assets/images/workout-features/timer.svg";
import Feature from "./Feature";

const SectionFeatures = () => {
  return (
    <div className="new-features flex">
      <Feature
        Icon={Calories}
        title="Keep track of calories and macros"
        tagline="Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!"
      />
      <Feature
        Icon={Accessfeature}
        title="Access all premium class of Fitness Pro"
        tagline="Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!"
      />
      <Feature
        Icon={Timer}
        title="Keep track of calories and macros"
        tagline="Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!"
      />
    </div>
  );
};

export default SectionFeatures;
