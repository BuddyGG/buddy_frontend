import React, { Component } from 'react';
import {
    Router,
    Route
  } from 'react-router-dom'
import Welcome from './scenes/Welcome';
import Matching from './scenes/Matching';
import history from './config/History';
import uuidv4 from 'uuid/v4'

export default class LoLAmigo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: null,
            id: null
        }
      }

    getChannel = (channel) => {
        this.setState({
            channel: channel,
        })
    }

    getCriteria = (criteria) => {
        this.setState({
            criteria: criteria,
        })
    }

    componentWillMount = () => {
        const sessionId = uuidv4();
        console.log(sessionId)

        localStorage.setItem('sessionId', sessionId)
        this.setState({
            id: sessionId
        })
    }

    render () {
        return (
            <Router history={history}>
                <div>
                    <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => <Welcome sendChannel={this.getChannel} id={this.state.id} sendCriteria={this.getCriteria} />} />
                    <Route path={process.env.PUBLIC_URL + '/matching'} render={ () => <Matching channel={this.state.channel} criteria={this.state.criteria} />} />                    
                </div>
            </Router>
            
        );
    }
}