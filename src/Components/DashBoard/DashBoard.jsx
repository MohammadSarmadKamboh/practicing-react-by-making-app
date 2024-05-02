import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./DashBoard.css";
import EMSMainLayoutPage from "../EMSHomePageLayout/EMSMainLayoutPage";
import MainLayoutPage from "../WallNuts/MainLayoutPage";
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

          <li className={`${selectedComponent == 'EMSMainLayoutPage' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('EMSMainLayoutPage')}>
            EMS Home Page Layout
          </li>
          <li className={`${selectedComponent == 'MainLayoutPage' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('MainLayoutPage')}>
            WallNut Website Page Layout
          </li>
          <li className={`${selectedComponent == 'CinemaLandingPage' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('CinemaLandingPage')}>
            Cinema App
          </li>
          <li className={`${selectedComponent == 'CountryDataFetcher' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('CountryDataFetcher')}>
            Country Data Fetcher API
          </li>
          <li className={`${selectedComponent == 'CountryDataDisplay' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('CountryDataDisplay')}>
            Disply Data by Selecting Country Code and Zip Code
          </li>
          <li className={`${selectedComponent == 'Portfolio' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('Portfolio')}>
            Portfolio
          </li>
          <li className={`${selectedComponent == 'Articles' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('Articles')}>
            Articles
          </li>
          <li className={`${selectedComponent == 'Movies' ? 'active-li' : ''}`}
            onClick={() => handleComponentClick('Movies')}>
            Movies
          </li>

          {/* Add more links for other components */}
        </ul>

      </div>

      <div className="main-content">
        {selectedComponent === 'EMSMainLayoutPage' && <EMSMainLayoutPage />}
        {selectedComponent === 'MainLayoutPage' && <MainLayoutPage />}
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