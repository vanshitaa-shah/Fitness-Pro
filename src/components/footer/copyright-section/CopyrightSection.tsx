import { ReactComponent as FacebookIcon } from "../../../assets/images/social-logos/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/social-logos/twitter.svg";
import { ReactComponent as InstaIcon } from "../../../assets/images/social-logos/instagram.svg";
import { ReactComponent as DribbleIcon } from "../../../assets/images/social-logos/dribble.svg";
import { ReactComponent as BehanceIcon } from "../../../assets/images/social-logos/behance.svg";
import "./CopyrightSection.scss";

const CopyrightSection = () => {
  return (
    <div className=" copyright-section container flex">
      <p className="small-400">
        Copyright &copy; 2021 UI8 LLC. All rights reserved
      </p>

      <div className="copyright-section-social-links flex">
        <FacebookIcon />
        <TwitterIcon />
        <InstaIcon />
        <DribbleIcon />
        <BehanceIcon />
      </div>
    </div>
  );
};

export default CopyrightSection;
