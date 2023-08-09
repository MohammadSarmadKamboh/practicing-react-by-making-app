import PropTypes from "prop-types";
import "./Cards.css";
import sugarCream from "../../Assets/Images/cardImages/Sugar Cream.png";
import coldBreeze from "../../Assets/Images/cardImages/Cold Breeze.png";
import earth from "../../Assets/Images/cardImages/Earth.png";
import sweetRain from "../../Assets/Images/cardImages/Sweet Rain.png";
import oldBuilding from "../../Assets/Images/cardImages/oldBuilding.png";
import iceCream from "../../Assets/Images/cardImages/Ice Cream.png";
import redSun from "../../Assets/Images/cardImages/Red Sun.png";
import lightGit from "../../Assets/Images/lightGit.png";
import darkGit from "../../Assets/Images/darkGit.png";
import lightLink from "../../Assets/Images/lightLink.png";
import darkLink from "../../Assets/Images/darkLink.png";

const Cards = ({ darkMode }) => {
  const cardData = [
    {
      id: 1,
      image: sugarCream,
      title: "IntenseProxy",
      description:
        "Proxy provider website including authentication, dashboard and dynamic features",
      tools: "React - Bootstrap - Styled Components",
    },
    {
      id: 2,
      image: coldBreeze,
      title: "$AAPE Coin",
      description: "Site for a BSC based coin called $AAPE",
      tools: "Vue - Nuxt - Netlify",
    },
    {
      id: 3,
      image: earth,
      title: "Blockchain Explorer; Hive Attention Tokens",
      description:
        "Sidechain explorer open source project (block explorer) for transactions.",
      tools: "React - TailwindCSS - Context API",
    },
    {
      id: 4,
      image: sweetRain,
      title: "GitProfile",
      description:
        "A nicer look to Github profiles using features such as user search, authentication using Firebase and charts using the GitHub API.",
      tools: "React - Redux - Firebase - GitHub API",
    },
    {
      id: 5,
      image: oldBuilding,
      title: "MovieDB",
      description:
        "TV application, displays different categories of movies/shows (popular, in theaters, trending etc) alongside a search option using TheMovieDB API for the data",
      tools: "React.js - Redux - TheMovieDB API",
    },
    {
      id: 6,
      image: iceCream,
      title: "Soundify",
      description:
        "Music search application, displays informations about artists such as albums, biography, songs that are available on youtube and much more using TheAudioDB API",
      tools: "Vue.js - Vuex - TheAudioDB API",
    },
    {
      id: 7,
      image: redSun,
      title: "Mu6icbot",
      description:
        "Discord music bot using Node.js and Discord's API library to play music through YouTube, added Genius API making the bot capable to pull the lyrics for the current playing song",
      tools: "Discord Library - Node.js - Genius API - Youtube API",
    }
  ];

  return (
    <div className={`cards ${darkMode ? "DarkMode" : ""}`}>
      <p style={{ fontSize: "18px", marginTop: "100px", textAlign: "left" }} id="featured-projects">FEATURED PROJECTS</p>

      <div className="mainDiv">
        <div className="card-container">
          {cardData.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt="Card" />
              <div className="card-content">
                <p className="card-title">
                  {card.title}
                  <span className="logos">
                    <img alt="Git" src={`${darkMode ? darkGit : lightGit}`} />
                    <img alt="Link" src={`${darkMode ? darkLink : lightLink}`} />
                  </span>
                </p>

                <p className="card-description">{card.description}</p>
                <p className="tools-used">{card.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr
        style={{
          border: darkMode ? "0.6px solid #666" : "0.6px solid #1A1A1A",
          marginTop: "160px",
        }}
      ></hr>
    </div>
  );
};

Cards.propTypes = {
  darkMode: PropTypes.bool
};

export default Cards;
