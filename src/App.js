import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Schedule from "./pages/schedules/Schedule";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PassengerDetails from "./pages/personalDetails/PassengerDetails";
import BookSeat from "./pages/selectSeat/BookSeat";
import './App.css'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/schedules" element={<Schedule />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passengerdetails" element={<PassengerDetails />} />
          <Route path="/selectseat" element={<BookSeat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
