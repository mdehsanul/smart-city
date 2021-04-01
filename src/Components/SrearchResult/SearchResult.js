import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import Navbar from "../Navbar/Navbar";
import "./SearchResult.css";
import car from "../../images/Frame-2.png";
import peopleImage from "../../images/peopleicon.png";

const SearchResult = () => {
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
                  <img src={car} alt="" srcset="" className="vehicle" />
                </div>
                <div class="col-auto pt-2">
                  <p className="vehiclNameAndTotalPerson">
                    Car <img src={peopleImage} alt="" className="peopleImage" />{" "}
                    4
                  </p>
                </div>
                <div class="col-2 pt-2">
                  <p>$67</p>
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
