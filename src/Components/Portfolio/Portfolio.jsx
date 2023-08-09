import { useState } from "react";
import "./Portfolio.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from "./Footer";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "DarkMode" : ""}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Cards darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>

  );
};

export default Portfolio;
