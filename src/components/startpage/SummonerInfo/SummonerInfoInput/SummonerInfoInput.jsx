import React, { Component } from 'react';
import AgeGroup from "./SummonerInfoInputSection/AgeGroup";
import Positions from "./SummonerInfoInputSection/Positions";
import VoiceChat from "./SummonerInfoInputSection/VoiceChat";
import Languages from "./SummonerInfoInputSection/Languages";
import Comment from "./SummonerInfoInputSection/Comment";

export default class SummonerInfoInput extends Component {
    render () {
        return (
            <div>
                <Positions handleChange={this.props.handleRoles} roles={this.props.roles}/>
                <Languages handleChange={this.props.handleLanguage} languageOptions={this.props.languageOptions} value={this.props.value} />
                <VoiceChat handleChange={this.props.handleVoiceChat} value={this.props.voicechat}/>
                <AgeGroup handleChange={this.props.handleAgeGroup} value={this.props.agegroup} />
                <Comment handleChange={this.props.handleComment} value={this.props.comment} />
            </div>
        );
    }
}