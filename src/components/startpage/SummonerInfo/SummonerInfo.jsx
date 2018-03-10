import React, { Component } from 'react'
import ValidationMessage from "./SummonerInfoInput/ValidationMessage";
import SummonerInfoHeader from "./SummonerInfoHeader/SummonerInfoHeader"
import SummonerInfoInput from "./SummonerInfoInput/SummonerInfoInput"
import { Form, Button } from 'semantic-ui-react'
import { languages } from '../../../config/Languages';
import * as _ from "lodash";

export default class SummonerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {
        top: false,
        jungle: false,
        mid: false,
        marksman: false,
        support: false
      },
      languageOptions: languages,
      value: [],
      voicechat: [true,false],
      agegroup: null,
      comment: null,
      errorMessage: false
    }
  }

  componentDidMount = () => {
    this.setDefaultRoles(this.props.player.positions)
  }

  setDefaultRoles = (predictedPositions) => {

    // Reset roles to false
    let roles = this.state.roles
    for (var role in roles){
      roles[role] = false;
    }

    predictedPositions.map(pos => roles[pos] = true)

    this.setState({
      roles: roles
    })
  }

  findMatches = () => {
    if(this.validateInput()){    
      const {roles,value,voicechat,agegroup,comment} = this.state
      
      const playerInfo = {
        selectedRoles: roles,
        languages: value,
        voicechat: voicechat,
        agegroup: agegroup,
        comment: comment,
        id: localStorage.getItem('sessionId')
      }
  
        this.props.submit(playerInfo);      
    } else {
      this.setState({
        errorMessage: true
      })
    }  
  }

  validateInput = () => {
    const { value, agegroup } = this.state
    
    if (value.length && agegroup.length && this.checkForNoPositions()){
      return true
    } else {
      return false
    }
  }

  checkForNoPositions = () => {
    return _.values(this.state.roles).includes(true);
  }

  toggleRole = (event) => {
    const name = event;
    let roles = this.state.roles;
    roles[name] = !roles[name];

    this.setState({
      roles: roles
    });
  }

  handleVoiceChat = (event, {label}) => { 
    let voicechat = [true];

    if(label === "YES"){
      voicechat = [true]
    } else if(label === "NO") {
      voicechat = [false]
    } else {
      voicechat = [true,false]
    }
   
    this.setState({
        voicechat: voicechat
    });
}

  handleAgeGroup = (age) => {
    this.setState({ agegroup: age })
  }

  handleLanguage = (e, { value }) => {
    if (this.state.value.length >= 5){
      return;
    }
    this.setState({value})
  }

  handleComment = (event) => this.setState({comment: event.target.value});

  render() {
    const player = this.props.player

    return (
      <Form inverted id="search-form" onSubmit={this.findMatches}>

        <SummonerInfoHeader 
          icon={player.icon_id} 
          name={player.name} 
          league={this.props.league} 
          champions={player.champions}/>
          
        <SummonerInfoInput 
          handleLanguage={this.handleLanguage}
          handleVoiceChat={this.handleVoiceChat}
          handleAgeGroup={this.handleAgeGroup}
          handleComment={this.handleComment}
          handleRoles={this.toggleRole}
          languageOptions={this.state.languageOptions}
          value={this.state.value}
          voicechat={this.state.voicechat}
          agegroup={this.state.agegroup}
          comment={this.state.comment}
          roles={this.state.roles}
          />  

        <Button fluid primary type="submit" id="submit-button" content="Find matches" disabled={this.props.isUnranked}/>
        <ValidationMessage errorMessage={this.state.errorMessage} /> 
      </Form>
    );
  }
}
