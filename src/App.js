import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import SearchResult from "./Components/SrearchResult/SearchResult";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

// createContext()
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/search">
            <Search></Search>
          </PrivateRoute>
          <PrivateRoute path="/searchresult">
            <SearchResult></SearchResult>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
