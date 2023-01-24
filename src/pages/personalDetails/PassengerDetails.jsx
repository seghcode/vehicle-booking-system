import React from "react";
import { Link } from "react-router-dom";

const PassengerDetails = () => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-between m-2">
      <div
        className="mt-3 align-content-center"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <form action="">
          <h4 className="card-title text-dark mb-2">Passenger Details</h4>
          <div className="card-body">
            <div className="row g-2">
              <div className="col-2">Seat No:</div>
              <div className="col-2 form-floating mb-2">
                <select name="" id="" className="form-select">
                  <option value="">Mr</option>
                  <option value="">Miss</option>
                  <option value="">Mrs</option>
                </select>
                <label htmlFor="name" className="floatingSelect">
                  Title <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="col-5 form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  required
                />
                <label htmlFor="name" className="floatingInput">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="col-3 form-floating mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  required
                />
                <label htmlFor="fullname" className="floatingInput">
                  Age
                </label>
              </div>
            </div>
            <h4>Contact Details</h4>
            <div className="row g-2">
              <div className="col-6 form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Full Name"
                  required
                />
                <label htmlFor="Email" className="floatingInput">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="col-6 form-floating mb-2">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Age"
                  required
                />
                <label htmlFor="mobile" className="floatingInput">
                  Mobile <span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-6 form-floating mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  required
                />
                <label htmlFor="ename" className="floatingInput">
                  Emmergency Name <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="col-6 form-floating mb-2">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Age"
                  required
                />
                <label htmlFor="ephone" className="floatingInput">
                  Emmergency Phone <span style={{ color: "red" }}>*</span>
                </label>
              </div>
            </div>
            <p>
              By Continuing you agree to our <Link>terms and condition</Link>
            </p>
            <div className="">
              <button type="submit" className="btn btn-primary">
                CLICK TO PAY
              </button>
            </div>
            <hr />
          </div>
        </form>
      </div>

      <div className="mt-3 mx-2">
        <h4>Other Details</h4>
        <div className="card p-2">
          <h6>
            Starting Point: <span>Abuja</span>
          </h6>
          <h6>
            Destination: <span>Lafia</span>
          </h6>
          <h6>
            Date/Time: <span>01/11/2022/06:30AM</span>
          </h6>
          <h6>
            Seat(s): <span>3,5</span>
          </h6>
          <h6>Passenger Details <span>Mr. Jon Doe</span></h6>
          <h6>Contact Info: <span>0900000000</span></h6>
          <h6>Amount Per Seat <span>#4000</span></h6>
          <h6>Total Payeable <span>#8,000</span></h6>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
