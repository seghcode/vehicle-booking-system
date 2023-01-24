import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div
        className="sign-up mt-3 align-content-center"
        style={{ display: "flex", justifyContent: "center", marginLeft: 'auto', marginRight: 'auto' }}
      >
        <form action="">
          <h4 className="card-title text-center text-dark mb-2 text-uppercase">LOGIN</h4>
          <div className="card-body">

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
                LOGIN
              </button>
            </div>
            <hr />
            <p>
              Dont Have an Account <Link to={'/signup'}>CLick to Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login