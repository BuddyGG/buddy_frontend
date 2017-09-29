import React, { Component } from 'react';
import SearchSummoner from '../components/startpage/SearchSummoner';
import SearchForm from '../components/startpage/SearchForm';
import SummonerArea from '../components/startpage/SummonerArea';
import { Segment, Image, Header } from 'semantic-ui-react';
import Logo from "../images/Logo.png"
import { Socket } from 'phoenix';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playerId: 1337
      };
    }

    getSummonerByName = (data) => {  
        this.setState({
            summonerInfo: data.data,
        })
    }

    connectToSocket = (playerInfo) => {
      // const token = JSON.parse(localStorage.getItem('token'));

      const socket = new Socket("ws://lolbuddy.herokuapp.com/socket", {
        logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); }
      });
      console.log(socket);
      socket.connect();  
      
      this.connectToChannel(socket, this.state.playerId);
    }

    connectToChannel = (socket, playerId) => {
      const channel = socket.channel(`players:${playerId}`);
      
          channel.join("test").receive('ok', (response) => {
            console.log(response);
          });
    }

    leaveChannel = (channel) => {
      channel.leave();
    }

    render() {
        const {summonerInfo = undefined} = this.state
        
        const league = (summonerInfo && summonerInfo.leagues[0]) ? 
        summonerInfo.leagues[0].tier + " " + summonerInfo.leagues[0].rank :
        "No leagues to show";

        return (
              <div id="main-content">
                <div id="width-control">
                  <div id="search-summoner">
                    <Image id="logo" src={Logo} size="medium" centered/>
                    <SearchSummoner getSummonerByName={this.getSummonerByName} />                 
                  </div>

                  {summonerInfo &&
                  <Segment inverted raised>
                    <SummonerArea icon={summonerInfo.icon_id} champions={summonerInfo.champions} name={summonerInfo.name} league={league}/>                 
                    <SearchForm submit={this.connectToSocket}/>
                  </Segment>              
                  } 

                </div>
                <Header as="h4" className="footer">Site is under development...</Header>                                
              </div>
        );
    }
}

export default Welcome;