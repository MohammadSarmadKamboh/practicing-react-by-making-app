import PropTypes from "prop-types";
import "./Footer.css";
import emailLight from "../../Assets/Images/emailLight.png";
import emailDark from "../../Assets/Images/emailDark.png";
import linkedInLight from "../../Assets/Images/linkedInLight.png";
import linkedInDark from "../../Assets/Images/linkedInDark.png";
import upLight from "../../Assets/Images/upLight.png";
import upDark from "../../Assets/Images/upDark.png";
import gitLight from "../../Assets/Images/gitLight.png";
import gitDark from "../../Assets/Images/gitDark.png";


const Footer = ({ darkMode }) => {
  return (
    <div className={`footer ${darkMode ? 'DarkMode' : ''}`}>
      <div className="footer-container">
        <span className="foo-span" id="contact">CONTACT</span>
        <div className={`${darkMode ? "foo-darkBTN" : "btns"}`}>
          <button>
            <img src={`${darkMode ? emailDark : emailLight}`} alt="Email" />
            <span className="foo-span"> Send an email</span>
          </button>
          <button>
            <img src={`${darkMode ? linkedInDark : linkedInLight}`} alt="LinkedIn" />
            <span className="foo-span">  LinkedIn </span>
          </button>
          <button>
            <img src={`${darkMode ? upDark : upLight}`} alt="LinkedIn" />
            <span className="foo-span"> Upwork </span>
          </button>
          <button>
            <img src={`${darkMode ? gitDark : gitLight}`} alt="LinkedIn" />
            <span className="foo-span"> Github </span>
          </button>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  darkMode: PropTypes.bool
};

export default Footer;
