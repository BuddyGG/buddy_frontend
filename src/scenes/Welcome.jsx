import React, { Component } from 'react';
import SearchSummoner from '../components/SearchSummoner';
import SearchForm from '../components/SearchForm';
import MostPlayed from '../components/MostPlayed';
import WelcomeHeader from '../components/Header';
import { Header, Button, Segment } from 'semantic-ui-react'
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
                        <Header as='h1'inverted textAlign='center'>Welcome {this.state.summonerInfo.data.name}</Header> :
                        <Header as='h1'inverted textAlign='center'>What's your summoner name?</Header> 
        
        const Champions = this.state.showSearchForm ? this.state.summonerInfo.data.champions : {};

        return (
              <div id="main-content">
                <div id="width-control">
                  <div id="search-summoner">
                    {Welcome}
                    <SearchSummoner getSummonerByName={this.getSummonerByName} />                 
                  </div>
                  {this.state.showSearchForm &&
                  <Segment raised>
                    <MostPlayed champ01={Champions[0].name} champ02={Champions[1].name} champ03={Champions[2].name}/>
                    <SearchForm/>
                  </Segment>              
                  } 
                </div>
                <Header as="h4" className="footer">Site is under development...</Header>                                
              </div>
        );
    }
}

export default Welcome;