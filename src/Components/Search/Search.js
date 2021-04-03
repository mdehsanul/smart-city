import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import GoogleMap from "../GoogleMap/GoogleMap";
import Navbar from "../Navbar/Navbar";
import "./Search.css";

const Search = () => {
  const { vehicleKey } = useParams();

  const history = useHistory();
  const handleClick = () => {
    const url = `/searchresult/${vehicleKey}`;
    history.push(url);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row searchPage">
          <div className="col-sm-4 searchField">
            <form>
              <label
                for="formGroupExampleInput"
                className="form-label form-title"
              >
                Pick From
              </label>
              <input
                type="text"
                name="start"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Choose starting point"
              />
              <label
                for="formGroupExampleInput2"
                className="form-label form-title"
              >
                Pick To
              </label>
              <input
                type="text"
                name="end"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Choose destination"
              />
              <label for="birthdaytime" className="form-label form-title">
                Choose a time for your travel:
              </label>
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                class="form-control"
              ></input>
              <input
                type="submit"
                className="search-btn"
                value="Search"
                onClick={handleClick}
              />
            </form>
          </div>
          <div className="col-sm-8">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
