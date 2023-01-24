import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./selectRoute.css";

const SelectRoute = () => {
  const [changeDate, setChangeDate] = useState(new Date());
  let today = new Date();
  // let dd = today.getDate();
  // let mm = today.getMonth() + 1;
  // let yyyy = today.getFullYear();
  // if (dd < 10){
  //   dd = '0' + dd
  // }
  // if (mm < 10){
  //   mm = '0' + mm
  // }
  // today = yyyy + '-' + mm + '-' + dd
  // let maxDate = "2022-11-15";
  let maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 32);
  // let maxDate = new Date(today.getFullYear(),today().getMonth(), 31)
  return (
    <div className="container  mt-3">
      <div className="card select-route">
        <div className="card-body">
          <h4 className="card-title text-center text-dark-50 ">
            Choose Destination
          </h4>
          <form action="">
            <div className="form-floating mb-3">
              <select name="" id="" className="form-select">
                <option value="">Abuja</option>
                <option value="">Keffi</option>
                <option value="">Akwanga</option>
              </select>
              <label htmlFor="floatingSelect">Starting Point</label>
            </div>
            <div className="form-floating mb-3">
              <select name="" id="" className="form-select">
                <option value="">Abuja</option>
                <option value="">Keffi</option>
                <option value="">Akwanga</option>
              </select>
              <label htmlFor="floatingSelect">Destination </label>
            </div>
            <div className="form-floating mb-3">
              <DatePicker
                className={"form-control"}
                onChange={setChangeDate}
                value={changeDate}
                maxDate={maxDate}
                minDate={today}
              />
              <label htmlFor="floatingSelect">Boarding Date</label>
            </div>
            {/* <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="floatingInput"
                // placeholder="name@example.com"
                min={today}
                max={maxDate}
              />
              <label htmlFor="floatingInput">Boarding Date</label>
            </div> */}
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="floatingInput"
                // placeholder="name@example.com"
                min={today}
                max={maxDate}
              />
              <label htmlFor="floatingInput">Return(Optional) Date</label>
            </div>
            <div className="">
              <button className="btn btn-primary">SEARCH</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectRoute;
