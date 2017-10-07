import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import Welcome from './scenes/Welcome';
import Matching from './scenes/Matching';

export default class LoLAmigo extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/matching" component={Matching} />                    
                </div>
            </Router>
            
        );
    }
}