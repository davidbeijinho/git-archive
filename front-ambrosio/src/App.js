import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Sensor from "./components/Sensor/Sensor";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from 'semantic-ui-react';

const App = () => (
  <BrowserRouter>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Menu />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>


        <Grid.Column>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sensor" component={Sensor} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </BrowserRouter>
);
export default App;