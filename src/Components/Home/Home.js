import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import bike from "../../images/Frame.png";
import car from "../../images/Frame-2.png";
import bus from "../../images/Frame-1.png";
import train from "../../images/Group.png";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/data.json";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
  });
  return (
    <div className="homeBackground">
      <Navbar></Navbar>
      <div className="container alignItem">
        <div className="row ">
          <div className="col-md-3 col-sm-12 ">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body "></div>
              <Link to="/">
                <img src={bike} alt="" className="cardBike" />
              </Link>
              <p>BIKE</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body"></div>
              <Link to="/">
                <img src={car} alt="" className="cardCar" />
              </Link>
              <p>CAR</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body"></div>
              <Link to="/">
                <img src={bus} alt="" className="cardBus" />
              </Link>
              <p>BUS</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body"></div>
              <Link to="/">
                <img src={train} alt="" className="cardTrain" />
              </Link>
              <p>TRAIN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
