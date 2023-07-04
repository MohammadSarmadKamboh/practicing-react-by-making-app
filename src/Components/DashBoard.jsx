import { useState } from "react";
import "./DashBoard.css";
import CountryDataFetcher from "./CountryDataFetcher";
import CountryDataDisplay from "./CountryDataDisplay";
import Portfolio from "../Components/Portfolio/Portfolio";

const DashBoard = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
      };
    
      return (
        <div className="dashboard-container">
          
          <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
              <li onClick={() => handleComponentClick('CountryDataFetcher')}>
              Country Data Fetcher API
              </li>
              <li onClick={() => handleComponentClick('CountryDataDisplay')}>
               Disply Data by Selecting Country Code and Zip Code
              </li>
              <li onClick={() => handleComponentClick('Portfolio')}>
              Portfolio
              </li>
              {/* Add more links for other components */}
            </ul>
          </div>

          <div className="main-content">
            {/* Render the selected component */}
            {selectedComponent === 'CountryDataFetcher' && <CountryDataFetcher />}
            {selectedComponent === 'CountryDataDisplay' && <CountryDataDisplay />}
            {selectedComponent === 'Portfolio' && <Portfolio />}
            {/* Add more conditionals for other components */}
          </div>
        </div>
      );
    }
    
    export default DashBoard;