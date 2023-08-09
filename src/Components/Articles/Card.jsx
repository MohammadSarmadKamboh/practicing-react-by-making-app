import PropTypes from "prop-types";
import "./Card.css";


const Card = ({ title, url, author, num_comments, created_at }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Comments: {num_comments}</p>
            <p>Created At: {new Date(created_at * 1000).toLocaleString()}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    num_comments: PropTypes.number,
    created_at: PropTypes.number

};

export default Card