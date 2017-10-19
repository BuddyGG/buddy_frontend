import React, { Component } from 'react';
import { Segment, Form } from 'semantic-ui-react';
import Positions from './CriteriaListSection/Positions';
import MatchList from './CriteriaListSection/AutoRefresh';
import VoiceChat from './CriteriaListSection/VoiceChat';
import AgeGroups from './CriteriaListSection/AgeGroups';

export default class CriteriaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions: {
                top: true,
                jungle: true,
                mid: true,
                marksman: true,
                support: true
            },
            ageGroups: {
                interval1: true,
                interval2: true,
                interval3: true,
            },
            voiceChat: {
                YES: true,
                NO: true
            },
            autoRefresh: true
        }
    }

    componentDidUpdate = () => {
        this.props.onChangeCriteria(this.state)
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