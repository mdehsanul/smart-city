import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import Navbar from "../Navbar/Navbar";
import "./SearchResult.css";
import peopleImage from "../../images/peopleicon.png";
import { useParams } from "react-router";
import fakeData from "../../fakeData/data.json";

const SearchResult = () => {
  const { vehicleKey } = useParams();
  const vehicle = fakeData.find((code) => code.id == vehicleKey);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row searchPage">
          <div className="col-sm-4 resultBox">
            <ul class="experiences">
              <li>
                <h4>Mirpur 1</h4>
              </li>
              <li>
                <h4>Dhanmondi</h4>
              </li>
            </ul>
            <div className="searchDetail">
              <div class="row justify-content-md-center">
                <div class="col-2 ">
                  <img src={vehicle.img} alt="" srcset="" className="vehicle" />
                </div>
                <div class="col-auto pt-2">
                  <p className="vehiclNameAndTotalPerson">
                    {vehicle.name}{" "}
                    <img src={peopleImage} alt="" className="peopleImage" />{" "}
                    {vehicle.person}
                  </p>
                </div>
                <div class="col-2 pt-2">
                  <p>${vehicle.rent}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
