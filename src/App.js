import './App.css';
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/'>
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
