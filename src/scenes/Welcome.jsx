import React, { Component } from 'react';
import { SearchSummoner } from '../components/SearchSummoner';
import SearchForm from '../components/SearchForm';
import { Header, Button } from 'semantic-ui-react'
import { SummonerInfo } from '../mocks/SummonerInfo';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: false
      };
    }

    search = () => {
      console.log(this.state.value);
    }

    handleChange = (event) => {
      console.log(this.state.value)
      this.setState({value: true});
    }

    render() {
        return (
            <div id="main-content">
              <div id="width-control">
                <div id="search-summoner">
                  <Header as='h1'textAlign='center'>What's your summoner name?</Header>
                  <SearchSummoner onChange={this.handleChange} />                 
                </div>

                {this.state.value == true &&
                  <SearchForm/>
                }

              </div>                
            </div>
        );
    }
}

export default Welcome;
