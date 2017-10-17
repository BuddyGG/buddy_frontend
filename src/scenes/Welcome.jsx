import React, { Component } from 'react';
import SearchSummoner from '../components/startpage/SearchSummoner';
import SearchForm from '../components/startpage/SearchForm';
import SummonerArea from '../components/startpage/SummonerArea';
import LoLAmigoHeader from '../components/shared/LoLAmigoHeader';
import { Segment, Header } from 'semantic-ui-react';
import history from '../config/History';

class Welcome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: localStorage.getItem('sessionId'),
        summonerInfo: null
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
        this.goToMatching()
      })     
    }

    goToMatching = (socket, player) => {
      this.props.sendConnectInfo(this.state.summonerInfo, this.state.id)
      history.push(process.env.PUBLIC_URL + '/matching');
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

                  {summonerInfo &&
                  <Segment inverted raised>
                    <SummonerArea icon={summonerInfo.icon_id} champions={summonerInfo.champions} name={summonerInfo.name} league={league}/>                 
                    <SearchForm history={this.props.history} submit={this.getUserInput} id={this.state.id}/>
                  </Segment>              
                  } 

                </div>
                <Header as="h4" className="footer">Site is under development...</Header>                                
              </div>
        );
    }
}

export default Welcome;