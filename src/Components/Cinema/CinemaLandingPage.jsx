import "./CinemaLandingPage.css";
import AuthForm from "./AuthForm";
// import Movies from './Movies';
import Group1 from "../../Assets/Images/Group1.png";



const CinemaLandingPage = () => {



  return (
    <div className="cinema-landing-page">

      <img src={Group1} alt="main" />
      <h3>Cinema</h3>
      <p>Sign Up and Sign In to Buy Your Ticket</p>
      <AuthForm />
      {/* <Movies /> */}
    </div>
  )
}

export default CinemaLandingPage