import React, { Component } from 'react';
import {
    Router,
    Route
  } from 'react-router-dom'
import Welcome from './scenes/Welcome';
import Matching from './scenes/Matching';
import history from './config/History';

export default class LoLAmigo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: null,
            id: null
        }
      }

    passData = (playerInfo, id) => {
        this.setState({
            playerInfo: playerInfo,
            id: id
        })
    }

    render () {
        return (
            <Router history={history}>
                <div>
                    <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => <Welcome sendConnectInfo={this.passData} />} />
                    <Route path={process.env.PUBLIC_URL + '/matching'} render={ () => <Matching playerInfo={this.state.playerInfo} id={this.state.id} />} />                    
                </div>
            </Router>
            
        );
    }
}