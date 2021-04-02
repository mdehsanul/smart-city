import React from "react";
import { useHistory } from "react-router";
import GoogleMap from "../GoogleMap/GoogleMap";
import Navbar from "../Navbar/Navbar";
import "./Search.css";

const Search = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/searchresult");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row searchPage">
          <div className="col-sm-4 searchField">
            <form>
              <label for="formGroupExampleInput" class="form-label">
                Pick From
              </label>
              <input
                type="text"
                name="from"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Choose starting point"
              />
              <label for="formGroupExampleInput2" class="form-label">
                Pick To
              </label>
              <input
                type="text"
                name="end"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Choose destination"
              />
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
