// // import React from 'react'

// const Movies = () => {
//     return (
//         <div>Movies</div>
//     )
// }

// export default Movies

// import React from "react";
// import { FetherIconsFilm } from "./FetherIconsFilm";
// import { SearchField } from "./SearchField";
import "./Movies.css";
import Group1 from "../../Assets/Images/CinemaLandingPage/Group1.png";


const Movies = () => {
    return (
        <div className="movies">
            {/* <img className="vector" alt="Vector" src="vector-3.svg" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 874" fill="none">
                <path d="M173.5 132.5 C149.5 62.1 72.6667 44.6667 0 59.5 V-5 H375 V357.5 C326.5 411 184.908 484.589 126 395 C78 322 203.5 220.5 173.5 132.5 Z" fill="#E5E1FF" fillOpacity="0.8" />
                <div>
                    <div>
                        <img src={Group1} alt="main" />
                        <h3>Cinema</h3>

                    </div>
                </div>
            </svg>

            {/* <div className="div">
                <div className="overlap">
                    <img className="vector" alt="Vector" src="vector-3.svg" />
                    <div className="current-location">
                        <img className="img" alt="Vector" src="vector.svg" />
                        <div className="text-wrapper">BWN-ARCADE</div>
                        <div className="text-wrapper-2">Cinema</div>
                    </div>
                    <div className="battery-group">
                        <div className="text-wrapper-3">4:16</div>
                        <img className="battery" alt="Battery" src="battery.svg" />
                        <img className="wifi" alt="Wifi" src="wifi.svg" />
                        <img className="signal" alt="Signal" src="signal.svg" />
                    </div>
                    <div className="group">
                        <div className="text-wrapper-4">Canvas</div>
                        <div className="group-2">
                            <div className="overlap-group">
                                <img className="rectangle" alt="Rectangle" src="rectangle-1.svg" />
                                <img className="ellipse" alt="Ellipse" src="ellipse-260.svg" />
                                <img className="rectangle-2" alt="Rectangle" src="rectangle-4.svg" />
                            </div>
                            <div className="overlap-2">
                                <img className="rectangle-3" alt="Rectangle" src="rectangle-2.svg" />
                                <div className="rectangle-4" />
                                <div className="ellipse-2" />
                            </div>
                        </div>
                    </div>
                    <SearchField
                        SFSymbolMicrophone="microphone-2.svg"
                        className="search-field-instance"
                        darkMode
                        iconMagnifyingglass="image.svg"
                        placeholderClassName="design-component-instance-node"
                        type="default"
                    />
                    <div className="group-3">
                        <div className="text-wrapper-5">New Movies</div>
                        <FetherIconsFilm />
                    </div>
                    <div className="ellipse-3" />
                    <div className="frame">
                        <img className="blacklight-movie" alt="Blacklight movie" src="blacklight-movie-poster-1.png" />
                    </div>
                    <img className="mask-group" alt="Mask group" src="mask-group.png" />
                    <div className="YASH-RAJ-FLIMS">
                        <span className="span">
                            YASH RAJ FLIMS
                            <br />
                        </span>
                        <span className="text-wrapper-6">&nbsp;</span>
                        <span className="text-wrapper-7">PATHAAN</span>
                    </div>
                    <div className="frame-2" />
                </div>
                <div className="overlap-3">
                    <div className="now-playing">
                        <img className="rectangle-5" alt="Rectangle" src="rectangle-8.png" />
                        <img className="rectangle-6" alt="Rectangle" src="rectangle-9.png" />
                        <img className="rectangle-7" alt="Rectangle" src="rectangle-10.png" />
                        <img className="rectangle-8" alt="Rectangle" src="rectangle-11.png" />
                        <div className="text-wrapper-8">Now Playing</div>
                    </div>
                    <img className="bot-navbar" alt="Bot navbar" src="bot-navbar.png" />
                </div>
            </div> */}

        </div>
    );
};


export default Movies;