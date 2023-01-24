import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid mt-2 p-3">
      <div className="footer-content">
        <div className="q-menu">
          <h4 className="text-bold"> Quick Menu</h4>
          <li><Link to="/">Home</Link></li>
          <li><Link>My Bookings</Link></li>
          <li><Link to="/login">Login/Sign Up</Link></li>
          <li><Link to="/schedules">Schedules</Link></li>
        </div>
        <div className="social-menu">
          <h4 className="text-bold"> Socials</h4>
          <li>
            <Link>Facebook</Link>
          </li>
          <li>
            <Link>Whatsapp</Link>
          </li>
          <li>
            <Link>Twitter</Link>
          </li>
        </div>
        <div className="contact-us">
          <h4 className="text-bold"> Contact Us</h4>
          <form action="">
            <div className="form-floating mb-1">
              <input type="email" className="form-control" />
              <label htmlFor="Email" className="floatingInput">
                Email
              </label>
            </div>
            <div className="form-floating mb-1">
              <input type="text" className="form-control" />
              <label htmlFor="Name" className="floatingInput">
                Name
              </label>
            </div>
            <div className="form-floating mb-1">
              <textarea
                name=""
                id=""
                cols="5"
                rows="5"
                style={{height: '100px'}}
                className="form-control"
              ></textarea>
              <label htmlFor="Messagee" className="floatingInput">
                Message
              </label>
            </div>
            <div className="">
              <button className="btn btn-primary">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
