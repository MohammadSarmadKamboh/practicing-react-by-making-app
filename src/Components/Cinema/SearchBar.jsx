import { useState } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const recognition = new window.webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.lang = 'en-US';


    const handleSearchInputChanges = (event) => {
        setSearchValue(event.target.value);

    };

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = () => {
        if (searchValue.trim() !== '') {
            props.search(searchValue);
            resetInputField();
        }
        else {
            alert('Please enter a search term.');
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            callSearchFunction();
        }
    };

    const handleVoiceSearch = () => {
        recognition.start();
        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript;
            setSearchValue(spokenText);
            recognition.stop();
            callSearchFunction();
        };
    };

    return (
        <div className="search-bar">
            <button className="search-button" onClick={callSearchFunction}>
                <img src={'/CinemaLandingPage/magnifyingglass.svg'} alt="magnifying-glass" />
            </button>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchValue}
                onChange={handleSearchInputChanges}
                onKeyDown={handleKeyDown}
            />
            <div className="icons">

                <button className="mic-button" onClick={handleVoiceSearch}>
                    <img src={'/CinemaLandingPage/microphone.svg'} alt="microphone" />
                </button>
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    search: PropTypes.func.isRequired
};

export default SearchBar;