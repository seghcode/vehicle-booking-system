import React from "react";
import "./bookseat.css";
const BookSeat = () => {
  return (
    <div className="container">
      <div className="my-3 d-flex justify-content-between">
        <div>
          <h4>Select Seat</h4>
          <div className="card p-2">
            <span>Available/Reserved/Selected</span>
            <div className="m-3 ">
              <div className="d-flex">
                <div className="form-check"></div>
                <div className="form-check">
                  <input
                    className="form-check-input ml-4"
                    type="checkbox"
                    value="1"
                    id="the_second"
                    disabled
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input ml-5 mr-5"
                    type="checkbox"
                    value="1"
                    id="the_third"
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input ml-5 mr-5"
                    type="checkbox"
                    value="1"
                    id="the_third"
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input ml-5 mr-5"
                    type="checkbox"
                    value="1"
                    id="the_third"
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    id=""
                  />
                </div>
              </div>

              <div className="">
                <button className="btn btn-primary" type="submit">
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSeat;
