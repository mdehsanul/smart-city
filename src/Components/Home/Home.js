import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import train from "../../images/Group.png";
import bike from "../../images/Frame.png";
import car from "../../images/Frame-2.png";
import bus from "../../images/Frame-1.png";

import { Link } from "react-router-dom";
import fakeData from "../../fakeData/data.json";

const Home = () => {
  // fackData
  const vehicleCode_1 = fakeData.find((data) => data.id === 1);
  const vehicle_1 = vehicleCode_1.id;
  const vehicleCode_2 = fakeData.find((data) => data.id === 2);
  const vehicle_2 = vehicleCode_2.id;
  const vehicleCode_3 = fakeData.find((data) => data.id === 3);
  const vehicle_3 = vehicleCode_3.id;
  const vehicleCode_4 = fakeData.find((data) => data.id === 4);
  const vehicle_4 = vehicleCode_4.id;

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
            <div className="card text-center mb-3 cardWidth ">
              <div className="card-body cardColor">
                <Link to={"/search/" + vehicle_1} style={ListStyle}>
                  <img src={train} alt="" className="cardTrain" />
                  <p className="cardName">TRAIN</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body cardColor">
                <Link to={"/search/" + vehicle_2} style={ListStyle}>
                  <img src={bike} alt="" className="cardBike" />
                  <p className="cardName">BIKE</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body cardColor">
                <Link to={"/search/" + vehicle_3} style={ListStyle}>
                  <img src={car} alt="" className="cardCar" />
                  <p className="cardName">CAR</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-center mb-3 cardWidth">
              <div className="card-body cardColor">
                <Link to={"/search/" + vehicle_4} style={ListStyle}>
                  <img src={bus} alt="" className="cardBus" />
                  <p className="cardName">BUS</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
