import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Teams from "./components/Teams/Teams";
import MenuList from "./components/MenuList/MenuList";
import './components/MenuList/MenuList.css'
import Leagues from "./components/Leagues/Leagues";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <MenuList/>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/teams">
          <Teams/>
        </Route>
        <Route path="/leagues">
          <Leagues/>
        </Route>
        <Route path="/League/LeagueDetails/:id">
          <LeagueDetails/>
        </Route>
        <Route path="/teams/:id">
          <Teams/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Team/TeamDetails/:id">
          <TeamDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
