import "./App.css";
import { useContext } from 'react';
//
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from "./Components/UserRegistration/RegistrationForm";
import LoginForm from "./Components/UserLogin/LoginForm";
import DashBoard from "./Components/DashBoard/DashBoard";
import Movies from './Components/Cinema/Movies';
import { AuthContextProvider } from "./Context/AuthContextProvider";
import { AuthContext } from "./Context/AuthContext"; //

function App() {
  const { currentUser } = useContext(AuthContext);
  //


  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            {/* Default route to show RegistrationForm when the user lands on the page */}
            <Route path="/" element={<RegistrationForm />} />

            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />

            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/movies" element={<Movies />} />

            {/* Protected route for Dashboard */}
            <Route path="/dashboard" element={currentUser ? <DashBoard /> : <Navigate to="/login" />} />
            <Route path="/movies" element={currentUser ? <Movies /> : <Navigate to="/login" />} />


            {/* Other routes */}
          </Routes>
        </Router>
      </AuthContextProvider>

    </>
  )
}

export default App
