import React from 'react'
import Schedule from '../schedules/Schedule';
import SelectRoute from "../selectRoute/SelectRoute";
import './home.css'

const Home = () => {
  return (
    <div className="container ">
        <div className="home-page d-flex justify-content-between py-2">
        <SelectRoute/>
        <Schedule/>
        </div>
    </div>
  )
}

export default Home