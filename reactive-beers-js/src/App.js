import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component'
import Beers from "./pages/beers/beers.component";
import NewBeer from "./pages/new-beer/new-beer.component";
import RandomBeer from "./pages/random-beer/random-beer.component";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
