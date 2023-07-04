import PropTypes from "prop-types";
import { useState } from "react";
import "./Buttons.css";

const Buttons = ({ darkMode }) => {
  const [buttonClicked, setButtonClicked] = useState("");

  const handleButtonClick = (buttonName) => {
    setButtonClicked(buttonName);
  };

  const buttonsData = [
    {
      id: "Selfbook",
      title: "Frontend Engineer (Remote)",
      date: "Jul 2021 - Present",
      tools: "Selfbook / US - New York",
      description: `- Developing screens and UI components for the web application using React and Tailwind.
        <br></br>- Fixing UI issues and integrating backend APIs with Redux Saga.`,
    },
    {
      id: "Wevoz",
      title: "Software Developer (Remote)",
      date: "Jun 2021 - Present",
      tools: "Wevoz / Italy",
      description: `- Developing mobile and web applications using React and React Native.
        <br></br>- Developing web scraping bots using Python and Selenium.
        <br></br>- Helping with PHP backend tasks and occasionally working with different programming languages.
        <br></br>- Consulting on frontend tech stack and integrating multiple external API’s across all platforms.`,
    },
    {
      id: "FreeBeings",
      title: "Frontend Engineer (Contractor)",
      date: "Mar 2021 - Aug 2021",
      tools: "FreeBeings",
      description: `- Working on web applications and occasionally leading the development team.
        <br></br>- Using React and integrating external APIs with the HIVE blockchain.`,
    },
    {
      id: "TDF",
      title: "Frontend Developer (In Office)",
      date: "Feb 2021 - Mar 2021",
      tools: "TDF / Algeria",
      description: `- Made landing pages and web applications collaborating with the back-end engineers of the team.
        <br></br>- Convert designs into real-world applications and pages using multiple front-end technologies.
        <br></br>- Frequently working on e-commerce projects.`,
    },
    {
      id: "Upwork",
      title: "Frontend Engineer (Freelance)",
      date: "May 2021 - Aug 2021",
      tools: "Upwork",
      description: `- Successfully completed numerous frontend jobs and high availability projects for clients which all have 5-star ratings and great feedback as well in a short amount of time which led me to get verified on Upwork with a 100% job success and more than $4K earnings and top-rated badge.`,
    },
    {
      id: "Shoppy",
      title: "Software Developer (Remote)",
      date: "Nov 2018 - Mar 2020",
      tools: "Shoppy",
      description: `- Worked on various client-side dashboard and payment components from designs and site features using Vue and Nuxt alongside integrating backend APIs.`,
    }
  ];

  return (
    <div>

      <div className="btn-container">
        {buttonsData.map((button) => (
          <button
            className={`${darkMode ? "" : "btn-dark"} ${buttonClicked === button.id ? "btn-clicked" : "btn"}`}
            onClick={() => handleButtonClick(button.id)}
            key={button.id}
          >
            {button.id}
          </button>
        ))}
      </div>
      {buttonsData.map((button) => (buttonClicked === button.id && (
        <div key={button.id}>
          <div className="intro2">
            <span style={{ fontSize: "24px" }}>{button.title}</span>
            <span style={{ fontSize: "16px" }}>{button.date}</span>
          </div>
          <p style={{ fontSize: "14px", color: "#004E93" }}>{button.tools}</p>
          <p dangerouslySetInnerHTML={{ __html: button.description }}></p>
        </div>
      )))}
    </div>
  );
};

Buttons.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

export default Buttons;
