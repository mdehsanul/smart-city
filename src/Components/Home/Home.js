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

  const ListStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="homeBackground">
      <Navbar></Navbar>
      <div className="container alignItem">
        <div className="row ">
          <div className="col-md-3 col-sm-12 ">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body "></div>
              <Link to="/search" style={ListStyle}>
                <img src={bike} alt="" className="cardBike" />
                <p>BIKE</p>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body"></div>
              <Link to="/search" style={ListStyle}>
                <img src={car} alt="" className="cardCar" />
                <p>CAR</p>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body"></div>
              <Link to="/search" style={ListStyle}>
                <img src={bus} alt="" className="cardBus" />
                <p>BUS</p>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body"></div>
              <Link to="/search" style={ListStyle}>
                <img src={train} alt="" className="cardTrain" />
                <p>TRAIN</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
