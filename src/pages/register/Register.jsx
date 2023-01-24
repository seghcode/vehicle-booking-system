import React from "react";
import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
  return (
    <div className="container">
      <div
        className="sign-up mt-3 align-content-center"
        style={{ display: "flex", justifyContent: "center", marginLeft: 'auto', marginRight: 'auto' }}
      >
        <form action="">
          <h4 className="card-title text-center text-dark mb-2 text-uppercase">Sign Up</h4>
          <div className="card-body">
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                required
              />
              <label htmlFor="fullname" className="floatingInput">
                Full Name
              </label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                required
              />
              <label htmlFor="email" className="floatingInput">
                Email Address
              </label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                required
              />
              <label htmlFor="username" className="floatingInput">
                Username
              </label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                required
              />
              <label htmlFor="password" className="floatingInput">
                Paasword
              </label>
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary">
                SIGN UP
              </button>
            </div>
            <hr />
            <p>
              Already Have an Account <Link to={'/login'}>CLick to Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
