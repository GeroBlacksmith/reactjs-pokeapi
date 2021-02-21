import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import "./assets/styles/App.css";

import List from "./components/List";
import Detail from "./components/Detail";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

const App = () => (
  <>
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{color:'white', textDecoration:'none'}}>
            <Typography variant="h6" >Pokemon List</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/poke" component={List} />
        <Route exact path="/details/:name" component={Detail} />
        <Redirect from="/" to="/poke" />
      </Switch>
    </Router>
  </>
);

export default App;
