import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import Navbar from "../Navbar/Navbar";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row searchPage">
          <div className="col-sm-4 searchField">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Pick From
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Choose starting point"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Pick To
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Choose destination"
              />
              <input type="submit" className="search-btn" value="Search" />
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

export default Search;
