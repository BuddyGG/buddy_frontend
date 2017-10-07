import React, { Component } from 'react';
import SearchSummoner from '../components/startpage/SearchSummoner';
import SearchForm from '../components/startpage/SearchForm';
import SummonerArea from '../components/startpage/SummonerArea';
import LoLAmigoHeader from '../components/shared/LoLAmigoHeader';
import { Segment, Header } from 'semantic-ui-react';
import { Socket } from 'phoenix';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        playerId: 1337,
        summonerInfo: null,
      };
    }

    getSummonerByName = (data) => {  
      this.setState({
          summonerInfo: data.data,
      })
    }

    getUserInput = (userInput) => {
      this.setState(prevState => ({
        summonerInfo: {
          ...prevState.summonerInfo,
          userInfo: userInput
        }
      }), function(){
        this.connectToSocket()
      })     
    }

    connectToSocket = () => {
      // const token = JSON.parse(localStorage.getItem('token'));

      const socket = new Socket("ws://lolbuddy.herokuapp.com/socket");

      socket.connect();  
      
      this.connectToChannel(socket, this.state.summonerInfo);
    }

    connectToChannel = (socket, player) => {
      const playerId = this.state.playerId
      const channel = socket.channel(`players:${playerId}`, {
        payload: player
      });
      
      channel.join().receive('ok', (response) => {
        console.log("Channel: " + JSON.stringify(response));
      });

      this.props.history.push('/matching');
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
              <div className="main-content">
                <div className="width-control">
                  <div id="search-summoner">
                    <LoLAmigoHeader/>
                    <SearchSummoner getSummonerByName={this.getSummonerByName} />                 
                  </div>

                  {summonerInfo &&
                  <Segment inverted raised>
                    <SummonerArea icon={summonerInfo.icon_id} champions={summonerInfo.champions} name={summonerInfo.name} league={league}/>                 
                    <SearchForm history={this.props.history} submit={this.getUserInput}/>
                  </Segment>              
                  } 

                </div>
                <Header as="h4" className="footer">Site is under development...</Header>                                
              </div>
        );
    }
}

export default Welcome;