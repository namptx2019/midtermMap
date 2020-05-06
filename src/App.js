import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import CovidGoogleMap from "./components/CovidGoogleMap";
import PatientInfo from "./components/PatientInfo";
import CovidDashboard from "./components/CovidDashboard";
import CovidStats from "./components/CovidStats";
import Button from '@material-ui/core/Button';

function App() {
    return (
        <Router>
          <div>
            <nav style={{textAlign:'center', backgroundColor:'#282c34'}}>
              <Button variant="contained" style={{margin: '10px'}}>
                <Link to="/map">Map</Link>
              </Button>
                  
              <Button variant="contained" style={{margin:'10px'}}>
                <Link to="/stat">Stat</Link>
              </Button>
            </nav>

            <Switch>
              <Route path="/map">
                <div className='divApp'>
                  <CovidDashboard/>
                </div>
              </Route>

              <Route path="/stat">
                <div className='divApp'>
                  <CovidStats/>
                </div>
              </Route>
             
            </Switch>
          </div>
        </Router>
    );
}

export default App;
