import React, { Component } from 'react';
import {SearchSummoner} from '../components/SearchSummoner';
import { Header, Button } from 'semantic-ui-react'
import { SummonerInfo } from '../mocks/SummonerInfo';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    search = () => {
      console.log(this.state.value);
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }

    render() {
        return (
            <div id="main-content">
                <div id="search-summoner">
                    <Header as='h1'textAlign='center'>What is your summoner name?</Header>
                    <SearchSummoner onChange={this.handleChange} />
                    <div id='search-summoner-button'>
                      <Button onClick={this.search} primary>Search</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
