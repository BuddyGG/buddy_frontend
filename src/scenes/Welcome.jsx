import React, { Component } from 'react';
import SearchSummoner from '../components/startpage/SearchSummoner/SearchSummoner';
import LoLAmigoHeader from '../components/shared/LoLAmigoHeader';
import SummonerInfo from "../components/startpage/SummonerInfo/SummonerInfo";
import { Segment, Transition, Message } from 'semantic-ui-react';
import {convertLeague} from '../config/LeagueConverter'
import history from '../config/History';
import { Socket } from 'phoenix';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        summonerInfo: null,
        channel: null,
        error: false,
        isChallenger: false,
        already_signed_up: false
      };
    }

    componentWillUnmount() {
      const channel = this.state.channel;
      channel.off("initial_matches");
    }

    getSummonerByName = (data) => {   
      this.setState({
          summonerInfo: data.data,
          error: false
      }, () => {
        const isChallenger = convertLeague(this.state.summonerInfo.leagues).includes("CHALLENGER")
        this.setState({
          isChallenger: isChallenger
        })
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
        "autoRefresh":false,
        "ignoreLanguage": true
      }

      player.userInfo.criteria = criteria
      
      this.props.sendCriteria(criteria);
      
      const session_token = localStorage.getItem('sessionToken')
      const session_id = localStorage.getItem('sessionId')
      
      const socket = new Socket("wss://api.buddy.gg/socket", {      
      //const socket = new Socket("wss://lolbuddy.herokuapp.com/socket", {
        params: {
          session_token: session_token,
          session_id: session_id
        }
      });

      socket.connect();

      this.connectToChannel(socket, player);
    }

    connectToChannel = (socket, player) => {       
      const session_id = localStorage.getItem('sessionId')

      console.log("Connecting to channel with player:")
      console.log(player)

      const channel = socket.channel(`players:${session_id}`, {
          payload: player     
      });

      channel.join().receive('ok', (response) => {
            console.log("Succesfully connected to channel");
        });

      channel.on('already_signed_up', (response) => {
          console.log("already_signed_up:")
          console.log(response)

          this.setState({
              already_signed_up: true
          });
      })

      channel.on('initial_matches', (response) => {
            console.log("initial_matches:")
            console.log(response)

            this.setState({
                already_signed_up: false,
                matches: response.players,
                channel: channel                
            }, () => this.goToMatching());
        })
    }

    setInitialPositions = (player) => {
      // const positions = {
      //     top: false,
      //     jungle: false,
      //     mid: false,
      //     marksman: false,
      //     support: false
      // };    

      // for (var key in positions){
      //     positions[key] = !player.userInfo.selectedRoles[key]
      // }

      const positions = {
        top: true,
        jungle: true,
        mid: true,
        marksman: true,
        support: true
      }; 
      return positions
    } 

    setInitialAgeGroup = (player) => {
      // const ageGroups = {
      //     interval1: false,
      //     interval2: false,
      //     interval3: false
      // }

      // if (player.userInfo.agegroup === "interval1") ageGroups.interval1 = true
      // if (player.userInfo.agegroup === "interval2") ageGroups.interval2 = true
      // if (player.userInfo.agegroup === "interval3") ageGroups.interval3 = true
      
      const ageGroups = {
        interval1: true,
        interval2: true,
        interval3: true
      }
      return ageGroups
    }

    setInitialVoiceChat = (player) => {
      // const voiceChat = {
      //     YES: false,
      //     NO: false
      // }

      // if (player.userInfo.voicechat) voiceChat.YES = true
      // if (!player.userInfo.voicechat) voiceChat.NO = true
      
      const voiceChat = {
        YES: true,
        NO: true
      }
      return voiceChat
    }   

    setLoader = (loading) => {
      this.setState({
        loading: loading
      })
    }

    handleError = () => {
      this.setState({
        error: true,
      })
    }

    render() {
      const {summonerInfo = undefined} = this.state
      let league = "";
      if(summonerInfo) {
        league = convertLeague(summonerInfo.leagues)
      }

        return (
              <div className="main-content">
                <div className="width-control">
                  <div id="search-summoner">
                    <LoLAmigoHeader/>
                    <SearchSummoner loading={this.setLoader} getSummonerByName={this.getSummonerByName} errorHandler={this.handleError} />
                    { this.state.error && <Message warning header="" content="No information to show for given summoner" />}                 
                    { this.state.isChallenger && <Message warning header="" content="Challenger players are not allowed to duo queue!" />}                 
                    { this.state.already_signed_up && <Message warning header="" content="Player already signed up!" />}                 
                  </div>

                  { !this.state.error && 
                    <Transition visible={summonerInfo !== null} animation={"fade down"} duration={400}>
                    <Segment inverted raised className="summoner-segment">
                      <SummonerInfo player={this.state.summonerInfo} submit={this.getUserInput} league={league} id={this.state.id} isChallenger={this.state.isChallenger} isUnranked={this.state.isUnranked}/>                   
                    </Segment>   
                  </Transition>       
                  }

                </div>                           
              </div>
        );
    }
}

export default Welcome;