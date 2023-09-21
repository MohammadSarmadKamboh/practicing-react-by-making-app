import PropTypes from 'prop-types';
import './MovieCard.css';

const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const MovieCard = ({ movie, onClick }) => {
    const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div className="movieCard" onClick={onClick}>
            <div>
                <img
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
            <h2>{movie.Title}</h2>

        </div>
    );
};

// Prop validation
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;
