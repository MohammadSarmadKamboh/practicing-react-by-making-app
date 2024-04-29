import "./ChooseSeats.css";
import CinemaSeatMap from "./CinemaSeatMap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


const ChooseSeats = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedMovie = location.state?.selectedMovie || null;
    const selectedDay = location.state?.selectedDay || null;
    const selectedDate = location.state?.selectedDate || null;
    const selectedMonth = location.state?.selectedMonth || null;
    const selectedTime = location.state?.selectedTime || null;

    const [showMessage, setShowMessage] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);



    // console.log("Choose Seats", location);
    // console.log("Choose Seats", selectedMovie);



    const handleBuyTicket = () => {

        if (selectedSeats.length > 0) {
            navigate("/ticket", {
                state: {
                    selectedMovie,
                    selectedDay,
                    selectedDate,
                    selectedMonth,
                    selectedTime,
                    selectedSeats
                }
            });
        } else {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    };

    return (
        <div className="ChooseSeats">
            <div className="choose-seats-top-section">
                <div className="choose-seats-logo" onClick={() => navigate("/movies")}>
                    <img src={'/CinemaLandingPage/logo.svg'} alt="logo" />
                    <h3>Cinema</h3>
                </div>

                <div style={{
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: 18,
                    textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',

                    width: "50%"
                }} >
                    CHOOSE SEATS
                    <div className="seatSelectionColors">

                        <img src={'/CinemaLandingPage/whiteDot.svg'} alt="whiteDot" width={20} height={20} />
                        <span>Available</span>

                        <img src={'/CinemaLandingPage/blackDot.svg'} alt="blackDot" width={20} height={20} />
                        <span>Reserved</span>

                        <img src={'/CinemaLandingPage/greenDot.svg'} alt="greenDot" width={20} height={20} />
                        <span>Selected</span>
                    </div>
                </div>

                <div className="calendar" >
                    <img src={'/CinemaLandingPage/Calendar.svg'} alt="Calendar" />
                </div>
            </div>
            <div className="screen" >
                <svg width="1350" height="250" viewBox="0 0 316 58" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", marginBottom: 20 }}>
                    <path d="M3.40966 55.2634C90.6056 -15.1074 218.698 -11.9707 313 49.4781" stroke="#403031" strokeWidth="1" strokeLinecap="round" />
                </svg>
            </div>
            <div className="seatRow" style={{ margin: '50px' }}>
                <CinemaSeatMap setSelectedSeats={setSelectedSeats} />
            </div>
            {showMessage && (
                <h3 style={{ color: "red" }}>Please select atleast one seat to buy your seat for the show first.</h3>
            )}
            <div style={{ marginBottom: 50, width: '85%', display: 'flex', justifyContent: 'space-between' }}>
                <div className="selectedItems">
                    <img src={'/CinemaLandingPage/CalendarWhite.svg'} alt="CalendarWhite" width={27} height={30} />
                    <span>{selectedDay} {selectedDate} {selectedMonth} </span>
                    <img src={'/CinemaLandingPage/whiteDot.svg'} alt="whiteDot" width={20} height={20} />
                    <span>{selectedTime} </span>
                </div>
                <div className="selectedItems">
                    <img src={'/CinemaLandingPage/Ticket.svg'} alt="Ticket" width={30} height={24} />
                    <span>Total Seats Selected: {selectedSeats.length}</span>
                    <img src={'/CinemaLandingPage/whiteDot.svg'} alt="whiteDot" width={20} height={20} />
                    {selectedSeats.length > 0 ? (
                        <span>Selected Seat no.: {selectedSeats.join(', ')}</span>
                    ) : (
                        <span>Selected Seats: No seat selected</span>
                    )}
                </div>
                <div className="selectedItems">
                    <img src={'/CinemaLandingPage/BuyCart.svg'} alt="BuyCart" width={30} height={30} />
                    <span>Total {selectedSeats.length * 200} Rs. </span>
                </div>
                <button
                    className="buyButton"
                    onClick={handleBuyTicket}
                >
                    Buy
                </button>
            </div>
        </div>
    )
}

export default ChooseSeats