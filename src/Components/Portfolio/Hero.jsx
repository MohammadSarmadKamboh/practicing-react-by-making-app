import PropTypes from "prop-types";
import "./Hero.css";
import Buttons from "./Buttons";
import arrowLight from "../../assets/Images/arrowLight.png";
import arrowDark from "../../assets/Images/arrowDark.png";

const Hero = ({ darkMode }) => {

  return (
    <div className={`hero ${darkMode ? "DarkMode" : ""}`}>
      <p>Hey, I’m</p>
      <p className="dr">Darlene Robertson</p>
      <p className="intro">
        I&apos;m a software engineer based in Toronto, Canada and also a
        communication and journalism student. I enjoy creating things that live
        on the internet, whether that be websites, applications, or anything in
        between. I have been freelancing for a year now while studying at the
        university and I&apos;ve manage to gain a decent amount of experience and
        valuable knowledge from all different kinds of fields throughout my
        projects/work.
      </p>
      <p style={{ marginTop: "50px" }}>
        <span style={{ fontSize: "24px" }}>Say hi</span>
        <span>
          <img
            className="img1"
            src={`${darkMode ? arrowDark : arrowLight}`}
            alt="Loading"
          />
        </span>
      </p>

      <p style={{ marginTop: "100px", fontSize:"22px" }} id="experience">EXPERIENCE</p>

      <Buttons/>
      <hr
        style={{
          border: darkMode ? "0.6px solid #CCCCCC" : "0.6px solid #1A1A1A",
          marginTop: "160px",
        }}
      ></hr>
    </div>
  );
};

Hero.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

export default Hero;
