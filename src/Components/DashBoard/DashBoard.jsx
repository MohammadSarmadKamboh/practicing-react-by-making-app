import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./DashBoard.css";
import CinemaLandingPage from "../Cinema/CinemaLandingPage";
import CountryDataFetcher from "../CountryDataFetcher/CountryDataFetcher";
import CountryDataDisplay from "../CountryDataDisplay/CountryDataDisplay";
import Portfolio from "../Portfolio/Portfolio";
import Articles from "../Articles/Articles";
import { Auth } from "../Firebase/Auth";
import { Db } from "../Firebase/Db";
import { auth } from '../../Config/firebaseConfig';



const DashBoard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const navigate = useNavigate();


  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const handleLogout = async () => {
    try {
      sessionStorage.removeItem('UserAccessToken');

      await auth.signOut();
      // sessionStorage.clear()
      navigate('/login');
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  useEffect(() => {
    // Check if the user is logged in by verifying the accessToken in session storage
    const UserAccessToken = sessionStorage.getItem('UserAccessToken');
    if (!UserAccessToken) {
      // If the accessToken is not available, the user is not logged in.
      // Redirect the user to the login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">



      <div className="sidebar">
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Log Out</button>

        <ul>

          <li onClick={() => handleComponentClick('CinemaLandingPage')}>
            Cinema App
          </li>
          <li onClick={() => handleComponentClick('CountryDataFetcher')}>
            Country Data Fetcher API
          </li>
          <li onClick={() => handleComponentClick('CountryDataDisplay')}>
            Disply Data by Selecting Country Code and Zip Code
          </li>
          <li onClick={() => handleComponentClick('Portfolio')}>
            Portfolio
          </li>
          <li onClick={() => handleComponentClick('Articles')}>
            Articles
          </li>
          <li onClick={() => handleComponentClick('Movies')}>
            Movies
          </li>

          {/* Add more links for other components */}
        </ul>

      </div>

      <div className="main-content">

        {selectedComponent === 'CinemaLandingPage' && <CinemaLandingPage />}
        {selectedComponent === 'CountryDataFetcher' && <CountryDataFetcher />}
        {selectedComponent === 'CountryDataDisplay' && <CountryDataDisplay />}
        {selectedComponent === 'Portfolio' && <Portfolio />}
        {selectedComponent === 'Articles' && <Articles />}
        {selectedComponent === 'Movies' &&
          <>
            <Auth />
            <Db />
          </>
        }
        {/* Add more conditionals for other components */}
      </div>
    </div>
  );
}

export default DashBoard;