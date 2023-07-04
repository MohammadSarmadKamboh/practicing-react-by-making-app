import PropTypes from 'prop-types';
import "./NavBar.css";
import lightSun from "../../assets/Images/lightSun.png";
import darkSun from "../../assets/Images/darkSun.png";

const NavBar = ({darkMode, toggleDarkMode}) => {

 
  return (
    <>
      <section className= {`navigationBar ${darkMode  ? 'DarkMode' : '' }`}>
        
          <div className="Frame2">
            <span>DR.</span>
            <ul className="Frame3">
              <li><a  href="#featured-projects">Projects</a></li>
              <li><a  href="#experience">Resume</a></li>
              <li><a  href="#contact">Contact</a></li>
              <li>
                <img src={`${darkMode ? darkSun : lightSun }`} alt="Loading" onClick={toggleDarkMode}/>
              </li>
            </ul>
          </div>
        
      </section>
    </>
  );
};

NavBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default NavBar;
