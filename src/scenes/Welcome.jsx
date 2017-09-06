import React, { Component } from 'react';
import SearchSummoner from '../components/SearchSummoner';
import SearchForm from '../components/SearchForm';
import WelcomeHeader from '../components/Header';
import { Header, Button } from 'semantic-ui-react'
import { SummonerInfo } from '../mocks/SummonerInfo';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showSearchForm: false,
        summonerInfo: {}
      };
    }

    getSummonerByName = (data) => {   
        this.setState({
            summonerInfo: data,
            showSearchForm: true
        }, function(){
          console.log(this.state)
        })
    }

    render() {
      const Welcome = this.state.showSearchForm ? 
                      <Header as='h1'textAlign='center'>Welcome {this.state.summonerInfo.data.name}</Header> :
                      <Header as='h1'textAlign='center'>What's your summoner name?</Header> 
                       
        return (
            <div id="main-content">
              <div id="width-control">
                <div id="search-summoner">
                  {Welcome}
                  <SearchSummoner getSummonerByName={this.getSummonerByName} />                 
                </div>

                {this.state.showSearchForm &&
                  <SearchForm/>
                }

              </div>                
            </div>
        );
    }
}

export default Welcome;
