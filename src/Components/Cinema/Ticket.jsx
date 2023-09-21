import "./Ticket.css";
import { useNavigate, useLocation } from "react-router-dom";


const Ticket = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    // Access the data from location.state
    const state = location.state || {};

    return (
        <div className="ticket">
            <div className="ticket-top-section">
                <div className="ticket-logo" onClick={() => navigate("/movies")}>
                    <img src={'/CinemaLandingPage/logo.svg'} alt="logo" />
                    <h3>Cinema</h3>
                </div>

                <div style={{
                    fontWeight: 800,
                    letterSpacing: 1,
                    textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                    fontSize: 24,
                }} >
                    E-TICKET
                    <div style={{ marginTop: 30 }}>
                        Once you buy a movie ticket simply scan the barcode to acces to your movie.
                    </div>
                </div>

                <div className="calendar" >
                    <img src={'/CinemaLandingPage/Calendar.svg'} alt="Calendar" />
                </div>
            </div>

            {/* Display selected data from the state object */}
            <div className="ticket-details">
                <img src={state.selectedMovie.Poster} alt={state.selectedMovie.Title} />
                <h2>Resevation Details</h2>

                <p>Movie Title: {state.selectedMovie.Title}</p>
                {/* <p>Relese Year: {state.selectedMovie.Year}</p> */}
                {/* <p>Type: {state.selectedMovie.Type}</p> */}
                <p>Date: {state.selectedDay},{state.selectedDate} {state.selectedMonth}.</p>
                {/* <p>Day: {state.selectedDay}</p> */}
                {/* <p>Month: {state.selectedMonth}</p> */}
                <p>Time: {state.selectedTime} </p>
                <p>Reserved Seats Number: {state.selectedSeats.join(", ")}</p>
                <p>Total Seats Reserved: {state.selectedSeats.length}</p>
                <p>Total Cost Rs.{state.selectedSeats.length * 200} </p>
            </div>

        </div >

    )
}

export default Ticket