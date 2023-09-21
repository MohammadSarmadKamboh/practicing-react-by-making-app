import "./Movies.css";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const Movies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();

    console.log("Movies Component", selectedMovie);


    const fetchMovies = async () => {
        try {
            const response = await fetch(MOVIE_API_URL);

            // console.log("Requested Response", response);


            const jsonResponse = await response.json();

            // console.log("Converted to jsonResponse", jsonResponse);


            setMovies(jsonResponse.Search);

            // console.log('111', movies);

        } catch (error) {
            console.error("Error fetching movies:", error);
            // Handle the error if needed
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchMovies();
    }, []);

    const search = async (searchValue) => {
        setLoading(true);
        setErrorMessage(null);

        try {
            const response = await fetch(
                `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
            );

            const { Response, Search, Error } = await response.json();

            if (Response === "True") {
                setMovies(Search);

                // console.log('222', movies);

            } else {
                setErrorMessage(Error || "An error occurred while fetching data.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage("An error occurred while fetching data.");
        } finally {
            setLoading(false);
        }
    };

    const handleMovieCardClick = (movie) => {
        setSelectedMovie(movie);
        navigate("/reservation", { state: { selectedMovie: movie } });
    };

    return (
        <div className="movies-container">
            <div className="top-section">
                <div className="logo">
                    <img src={'/CinemaLandingPage/logo.svg'} alt="logo" />
                    <h3>Cinema</h3>
                </div>

                <div className="search-bar-container">
                    <SearchBar search={search} />
                </div>

                <div className="location">
                    <img src={'/CinemaLandingPage/location.svg'} alt="location" />
                    <div className="text">
                        <p>Cinema</p>
                        <h5>BWN-ARCADE</h5>
                    </div>
                </div>
            </div>

            <div className="filmIcon">
                <img src={'/CinemaLandingPage/filmIcon.svg'} alt="filmIcon" width={30} />
                <p style={{ marginLeft: '10px' }}>New Movies</p>
            </div>

            <div className="movie-cards-container" >
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <MovieCard
                            key={`${index}-${movie.Title}`}
                            movie={movie}
                            onClick={() => handleMovieCardClick(movie)}
                        />
                    ))
                )}
            </div>
            {/* <div className="new-element">New Element 2</div> */}

        </div>
    );
};


export default Movies;
