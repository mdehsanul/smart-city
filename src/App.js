import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import SearchResult from "./Components/SrearchResult/SearchResult";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Router path="/login">
            <Login></Login>
          </Router>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/searchresult">
            <SearchResult></SearchResult>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
