import React, { Component } from 'react';
import SearchSummoner from '../components/SearchSummoner';
import SearchForm from '../components/SearchForm';
import SummonerArea from '../components/SummonerArea';
import { Button, Segment, Image, Header } from 'semantic-ui-react';
import {CustomHeader} from '../components/CustomHeader'
import { SummonerInfo } from '../mocks/SummonerInfo';
import Logo from "../images/Logo.png"

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showSearchForm: false,
        summonerInfo: {}
      };
    }

    getSummonerByName = (data) => {
      console.log(data)   
        this.setState({
            summonerInfo: data.data,
            showSearchForm: true
        }, function(){

        })
    }

    render() {
        const summonerInfo = this.state.summonerInfo
        
        //TODO: Clean up this shit
        const Champions = this.state.showSearchForm ? summonerInfo.champions : [];
        const Icon = this.state.showSearchForm ? summonerInfo.icon_id : "";
        const Name = this.state.showSearchForm ? summonerInfo.name : "";
        let League = "No leagues to show";
        if( this.state.showSearchForm && summonerInfo.leagues[0] != null){ //TODO: Optimise this
          League = summonerInfo.leagues[0].tier + " " + summonerInfo.leagues[0].rank;
        }
        


        return (
              <div id="main-content">
                <div id="width-control">
                  <div id="search-summoner">
                    <Image id="logo" src={Logo} size="medium" centered/>
                    <SearchSummoner getSummonerByName={this.getSummonerByName} />                 
                  </div>
                  {this.state.showSearchForm &&
                  <Segment inverted raised>
                    <SummonerArea icon={Icon} champions={Champions} name={Name} league={League}/>                 
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