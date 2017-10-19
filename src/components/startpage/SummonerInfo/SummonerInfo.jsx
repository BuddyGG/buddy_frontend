import React, { Component } from 'react'

import SummonerInfoHeader from "./SummonerInfoHeader/SummonerInfoHeader"
import SummonerInfoInput from "./SummonerInfoInput/SummonerInfoInput"
import { Form, Button } from 'semantic-ui-react'
import { languages } from '../../../config/Languages';

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
      voicechat: false,
      agegroup: "",
      comment: ""
    }
  }

  findMatches = () => {
    const {roles,value,voicechat,agegroup,comment} = this.state

    const playerInfo = {
      selectedRoles: roles,
      languages: value,
      voicechat: voicechat,
      agegroup: agegroup,
      comment: comment,
      id: this.props.id
    }

    this.props.submit(playerInfo);
  }

  toggleRole = (event) => {
    const target = event.target;
    const name = target.name;

    let roles = this.state.roles;
    roles[name] = !roles[name];

    this.setState({
      roles: roles
    });
  }

  handleVoiceChat = (bool) => this.setState({ voicechat: bool })

  handleAgeGroup = (age) => {
    this.setState({ agegroup: age })
  }

  handleLanguage = (e, { value }) => {
    console.log("language")
    this.setState({value})
  }

  handleComment = (event) => this.setState({comment: event.target.value});

  render() {
    const player = this.props.player

    return (
      <Form inverted id="search-form" onSubmit={this.findMatches}>

        <SummonerInfoHeader icon={player.icon_id} name={player.name} league={this.props.league} champions={player.champions}/>
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

        <Button fluid primary type="submit">Find matches</Button>

      </Form>
    );
  }
}
