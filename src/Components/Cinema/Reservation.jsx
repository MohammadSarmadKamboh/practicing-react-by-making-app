import { useState } from "react";
import "./Reservation.css";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";


const showtimes = [
  { time: "12:00 p.m." },
  { time: "3:00 p.m." },
  { time: "6:00 p.m." },
  { time: "9:00 p.m." },
  { time: "12:00 a.m." }
];

const Reservation = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const selectedMovie = location.state?.selectedMovie || null;
  // console.log("Resevation", selectedMovie);

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const [showMessage, setShowMessage] = useState(false);


  const calculateDateRange = () => {
    const today = new Date();
    const dateRange = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const day = currentDate.toLocaleString("default", { weekday: "short" });
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "short" });

      dateRange.push({ day, date, month });
    }

    return dateRange;
  };

  const dateRange = calculateDateRange();

  const handleReserveSeat = () => {
    if (selectedDate && selectedTime) {
      navigate("/chooseSeats", {
        state: {
          selectedMovie,
          selectedDay,
          selectedDate,
          selectedMonth,
          selectedTime,
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
    <div className="Reservation" style={{
      backgroundImage: `url(${selectedMovie ? selectedMovie.Poster : ''})`, backgroundSize: 'cover'
    }}>

      <div className="ReservationLogo" onClick={() => navigate("/movies")} >
        <img src={'/CinemaLandingPage/ReservationLogo.svg'} alt="ReservationLogo" />
        <h3>Cinema</h3>
      </div>

      <div >
        {selectedMovie && (
          <div className="selected-movie-card" >
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            {/* <p>({selectedMovie.Year})</p> */}
            <h2>{selectedMovie.Title}</h2>
          </div>
        )}
      </div>
      {showMessage && (
        <h3 style={{ color: "red" }}>Please select both date and time to reserve your seat for the show first.</h3>
      )}
      <h3 style={{ marginBottom: "90px" }}>SELECTE SHOW&#39;S DATE AND TIME</h3>


      <div className="Dates">
        {dateRange.map((dateInfo, index) => (
          <div
            key={index}
            style={{
              marginBottom: index === 3 ? '110px' : index === 1 || index === 5 ? '30px' : index === 2 || index === 4 ? '60px' : {},
              width: index === 3 ? '60px' : {},
              height: index === 3 ? '100px' : {},
              background:
                index === 3 && index === selectedDateIndex
                  ? '#009951'
                  : index === 3
                    ? 'linear-gradient(131deg, #c7c3e0 0%, #21232f 86.25%)'
                    : index === selectedDateIndex
                      ? '#009951'
                      : 'linear-gradient(119deg, rgba(101, 97, 111, 0.80) 4.89%, #21232F 100%)',
            }}
            onClick={() => {
              setSelectedDateIndex(index);
              setSelectedDay(dateInfo.day);
              setSelectedDate(dateInfo.date);
              setSelectedMonth(dateInfo.month);

            }}
          >
            <span>{dateInfo.day}</span>
            <span>{dateInfo.date}{' '}{dateInfo.month}</span>
          </div>
        ))}
      </div>
      <div className="Time">
        {showtimes.map((showtime, index) => (
          <div
            key={index}
            style={{
              marginBottom: index === 2 ? '110px' : index === 1 || index === 3 ? '60px' : {},
              width: index === 2 ? '60px' : {},
              height: index === 2 ? '40px' : {},
              background:
                index === 2 && index === selectedTimeIndex
                  ? '#009951'
                  : index === 2
                    ? 'linear-gradient(131deg, #c7c3e0 0%, #21232f 86.25%)'
                    : index === selectedTimeIndex
                      ? '#009951'
                      : 'linear-gradient(119deg, rgba(101, 97, 111, 0.80) 4.89%, #21232F 100%)',
            }}
            onClick={() => {
              setSelectedTimeIndex(index);
              setSelectedTime(showtime.time)
            }}
          >
            <span>{showtime.time}</span>
          </div>
        ))}
      </div>

      <button
        className="ResvBtn"
        onClick={handleReserveSeat}
      >
        Reserve Your Seat
      </button>

    </div>
  )
}

Reservation.propTypes = {
  selectedMovie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }),
};

export default Reservation