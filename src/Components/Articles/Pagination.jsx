import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const [displayedPages, setDisplayedPages] = useState([]);

    useEffect(() => {
        const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
        setDisplayedPages(pages);
    }, [totalPages]);


    const handlePageChange = (page) => {
        onPageChange(page);
    };
    return (
        <div className="pagination">

            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                &laquo;
            </button>


            {displayedPages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
            ))}


            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}>
                &raquo;
            </button>

        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func

};

export default Pagination