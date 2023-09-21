import { useState } from 'react';
import PropTypes from 'prop-types';


// Define your SVG components here (Available, Selected, Reserved)

const AvailableSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="66" viewBox="0 0 30 22" fill="none">
        <path d="M0 4C0 2.89543 0.89543 2 2 2H4C5.10457 2 6 2.89543 6 4V14C6 15.1046 6.89543 16 8 16H22C23.1046 16 24 15.1046 24 14V4C24 2.89543 24.8954 2 26 2H28C29.1046 2 30 2.89543 30 4V17C30 19.7614 27.7614 22 25 22H5C2.23858 22 0 19.7614 0 17V4Z" fill="url(#paint0_linear_4_275)" />
        <path d="M7 3C7 1.34315 8.34315 0 10 0H20C21.6569 0 23 1.34315 23 3V14C23 14.5523 22.5523 15 22 15H8C7.44772 15 7 14.5523 7 14V3Z" fill="url(#paint1_linear_4_275)" />
        <defs>
            <linearGradient id="paint0_linear_4_275" x1="15" y1="2" x2="15" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFDFC" />
                <stop offset="1" stopColor="#656569" />
            </linearGradient>
            <linearGradient id="paint1_linear_4_275" x1="15" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFDFC" />
                <stop offset="1" stopColor="#656569" />
            </linearGradient>
        </defs>
    </svg>
);

const SelectedSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="66" viewBox="0 0 30 22" fill="none">
        <path d="M0 4C0 2.89543 0.89543 2 2 2H4C5.10457 2 6 2.89543 6 4V14C6 15.1046 6.89543 16 8 16H22C23.1046 16 24 15.1046 24 14V4C24 2.89543 24.8954 2 26 2H28C29.1046 2 30 2.89543 30 4V17C30 19.7614 27.7614 22 25 22H5C2.23858 22 0 19.7614 0 17V4Z" fill="url(#paint0_linear_4_265)" />
        <path d="M7 3C7 1.34315 8.34315 0 10 0H20C21.6569 0 23 1.34315 23 3V14C23 14.5523 22.5523 15 22 15H8C7.44772 15 7 14.5523 7 14V3Z" fill="url(#paint1_linear_4_265)" />
        <defs>
            <linearGradient id="paint0_linear_4_265" x1="15" y1="2" x2="15" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#098D26" />
                <stop offset="1" stopColor="#656569" />
            </linearGradient>
            <linearGradient id="paint1_linear_4_265" x1="15" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#098D26" />
                <stop offset="1" stopColor="#656569" />
            </linearGradient>
        </defs>
    </svg>
);

const ReservedSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="66" viewBox="0 0 30 22" fill="none">
        <path d="M0 4C0 2.89543 0.89543 2 2 2H4C5.10457 2 6 2.89543 6 4V14C6 15.1046 6.89543 16 8 16H22C23.1046 16 24 15.1046 24 14V4C24 2.89543 24.8954 2 26 2H28C29.1046 2 30 2.89543 30 4V17C30 19.7614 27.7614 22 25 22H5C2.23858 22 0 19.7614 0 17V4Z" fill="url(#paint0_linear_4_290)" />
        <path d="M7 3C7 1.34315 8.34315 0 10 0H20C21.6569 0 23 1.34315 23 3V14C23 14.5523 22.5523 15 22 15H8C7.44772 15 7 14.5523 7 14V3Z" fill="url(#paint1_linear_4_290)" />
        <defs>
            <linearGradient id="paint0_linear_4_290" x1="15" y1="2" x2="15" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#65616F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#21232F" />
            </linearGradient>
            <linearGradient id="paint1_linear_4_290" x1="15" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#65616F" stopOpacity="0.8" />
                <stop offset="1" stopColor="#21232F" />
            </linearGradient>
        </defs>
    </svg>
);

const Seat = ({ status, onClick }) => {
    // Render the appropriate SVG based on the seat status
    const renderSeatSVG = () => {
        switch (status) {
            case 'available':
                return <AvailableSVG />;
            case 'selected':
                return <SelectedSVG />;
            case 'reserved':
                return <ReservedSVG />;
            default:
                return null;
        }
    };

    return (
        <div className={`seat ${status}`} onClick={onClick}>
            {renderSeatSVG()}
        </div>
    );
};
Seat.propTypes = {
    status: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const CinemaSeatMap = ({ setSelectedSeats }) => {
    const [seats, setSeats] = useState(Array(72).fill('available')); // Initialize all seats as available

    // Handle seat click
    const handleSeatClick = (index) => {
        const updatedSeats = [...seats];
        updatedSeats[index] = updatedSeats[index] === 'available' ? 'selected' : 'available';
        setSeats(updatedSeats);
        // Update the selected seats in the parent component
        const updatedSelectedSeats = updatedSeats
            .map((status, seatIndex) => (status === 'selected' ? seatIndex + 1 : null))
            .filter((seat) => seat !== null);
        setSelectedSeats(updatedSelectedSeats);
    };

    const renderSeats = () => {
        return seats.map((status, index) => (
            <Seat key={index} status={status} onClick={() => handleSeatClick(index)} />
        ));
    };

    return (
        <>
            {renderSeats()}
            {/* Add logic for displaying selected and reserved seats */}
        </>
    );
};

CinemaSeatMap.propTypes = {
    setSelectedSeats: PropTypes.func.isRequired
};


export default CinemaSeatMap;




// import PropTypes from 'prop-types';
// import './Seat.css';


// const Seat = ({ count }) => {
//     const seats = [];

//     for (let i = 0; i < count; i++) {
//         seats.push(
//             <img
//                 key={i}
//                 src="./CinemaLandingPage/Seat.svg"
//                 alt="Seat"
//                 width={90}
//                 height={66}
//             />
//         );

//     }

//     return <div >{seats.map(seat => seat)}</div>;
// };

// Seat.propTypes = {
//     count: PropTypes.number.isRequired,
// };

// export default Seat;