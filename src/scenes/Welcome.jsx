import React, { Component } from 'react';
import {SearchSummoner} from '../components/SearchSummoner';
import { Header } from 'semantic-ui-react'

class Welcome extends Component {
    render() {
        return (
            <div id="Main-Content">
                <div id="Search-Summoner">
                    <Header as='h1'textAlign='center'>What is your summoner name?</Header>
                    <SearchSummoner/>   
                </div>                
            </div>
        );
    }
}

export default Welcome;