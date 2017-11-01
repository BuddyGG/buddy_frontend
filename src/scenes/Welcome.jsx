import React, { Component } from 'react';
import SearchSummoner from '../components/startpage/SearchSummoner/SearchSummoner';
import LoLAmigoHeader from '../components/shared/LoLAmigoHeader';
import SummonerInfo from "../components/startpage/SummonerInfo/SummonerInfo";
import { Segment, Header, Transition } from 'semantic-ui-react';
import history from '../config/History';
import { Socket } from 'phoenix';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: localStorage.getItem('sessionId'),
        summonerInfo: null,
        channel: null
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

    goToMatching = () => { 
      this.props.sendChannel(this.state.channel)   
      history.push(process.env.PUBLIC_URL + '/matching');
    }
    
    connectToSocket = () => {
      const player = this.state.summonerInfo

      const criteria = {
        "positions": this.setInitialPositions(player),
        "ageGroups": this.setInitialAgeGroup(player),
        "voiceChat": this.setInitialVoiceChat(player),
        "autoRefresh":false
      }

      player.userInfo.criteria = criteria
      
      this.props.sendCriteria(criteria);
      
      const socket = new Socket("wss://lolbuddy.herokuapp.com/socket");

      socket.connect();

      this.connectToChannel(socket, player);
    }

    setInitialPositions = (player) => {
      const positions = {
          top: false,
          jungle: false,
          mid: false,
          marksman: false,
          support: false
      };    

      for (var key in positions){
          positions[key] = !player.userInfo.selectedRoles[key]
      }

      return positions
    } 

    setInitialAgeGroup = (player) => {
      const ageGroups = {
          interval1: false,
          interval2: false,
          interval3: false
      }

      if (player.userInfo.agegroup === "interval1") ageGroups.interval1 = true
      if (player.userInfo.agegroup === "interval2") ageGroups.interval2 = true
      if (player.userInfo.agegroup === "interval3") ageGroups.interval3 = true

      return ageGroups
    }

    setInitialVoiceChat = (player) => {
      const voiceChat = {
          YES: false,
          NO: false
      }

      if (player.userInfo.voicechat) voiceChat.YES = true
      if (!player.userInfo.voicechat) voiceChat.NO = true

      return voiceChat
    }

    connectToChannel = (socket, player) => {       
      const id = this.props.id

      console.log("Connecting to channel with player:")
      console.log(player)

      const channel = socket.channel(`players:${id}`, {
          payload: player         
      });
    
      this.setState({
          channel: channel
      }, () => {
        this.goToMatching()
      } )

    }

    setLoader = (loading) => {
      this.setState({
        loading: loading
      })
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
                    <SearchSummoner loading={this.setLoader} getSummonerByName={this.getSummonerByName} />                 
                  </div>

                  
                  <Transition visible={summonerInfo !== null} animation={"fade down"} duration={400}>
                    <Segment inverted raised>
                      <SummonerInfo player={this.state.summonerInfo} submit={this.getUserInput} league={league} id={this.state.id} />                   
                    </Segment>   
                  </Transition>                             
                  

                </div>
                <Header as="h4" className="footer">Site is under development...</Header>                                
              </div>
        );
    }
}

export default Welcome;