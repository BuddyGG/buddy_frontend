import React, { Component } from 'react';
import { Segment, Form, Label, Button } from 'semantic-ui-react';
import history from '../../../config/History';
import Positions from './CriteriaListSection/Positions';
import MatchList from './CriteriaListSection/AutoRefresh';
import VoiceChat from './CriteriaListSection/VoiceChat';
import AgeGroups from './CriteriaListSection/AgeGroups';

export default class CriteriaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: {
                top: null,
                jungle: null,
                mid: null,
                marksman: null,
                suppoert: null
            },
            ageGroups: {
                interval1: null,
                interval2: null,
                interval2: null,                
            },
            voiceChat: {
                YES: null,
                NO: null
            }
        }
    }

    componentDidMount = () => {    
        if(!this.props.criteria){
            history.push('/')
        } else {
            this.setState({
                positions: this.props.criteria.positions,
                ageGroups: this.props.criteria.ageGroups,
                voiceChat: this.props.criteria.voiceChat
            })
        } 
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.state !== nextState)
      }
    
    componentDidUpdate = () => {
        this.props.onChangeCriteria(this.state)
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

        if (player.userInfo.agegroup === "13-19") ageGroups.interval1 = true
        if (player.userInfo.agegroup === "20-29") ageGroups.interval2 = true
        if (player.userInfo.agegroup === "29+") ageGroups.interval3 = true

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

    onChangePositions = (event) => {
        const pos = event.target.name;
    
        let positions = this.state.positions;
        positions[pos] = !positions[pos];
    
        this.setState({
            positions: positions
        });
    }

    onChangeAgeGroup = (event, {name}) => {    
        let ageGroups = this.state.ageGroups;
        ageGroups[name] = !ageGroups[name];
    
        this.setState({
            ageGroups: ageGroups
        });
    }

    onChangeVoiceChat = (event, {label}) => {    
        let voiceChat = this.state.voiceChat;
        voiceChat[label] = !voiceChat[label];
    
        this.setState({
            voiceChat: voiceChat
        });
    }

    render () {
        return (
            <div>
                <Form inverted>
                    <Segment id="criteria-bar" raised inverted>
                        <Label id="criteria-header" color='orange' floating>Your criterias</Label>
                        <Positions onChange={this.onChangePositions} positions={this.state.positions} />
                        <AgeGroups onChange={this.onChangeAgeGroup} ageGroups={this.state.ageGroups} />
                        <VoiceChat onChange={this.onChangeVoiceChat} voiceChat={this.state.voiceChat}/>
                        <MatchList/>
                    </Segment>
                </Form>
            </div>
        );
    }
}