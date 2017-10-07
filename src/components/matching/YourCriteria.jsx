import React, { Component } from 'react';
import LoLAmigoHeader from '../shared/LoLAmigoHeader';
import { Segment, Form } from 'semantic-ui-react';
import Roles from '../matching/Roles';
import MatchList from '../matching/MatchList';
import VoiceChat from '../matching/VoiceChat';
import AgeGroup from '../matching/AgeGroup';

export default class YourCriteria extends Component {
    render () {
        return (
            <div className="main-content">
                <div className="width-control2">
                    <LoLAmigoHeader/>
                    <Form inverted>
                        <Segment id="criteria-bar" raised inverted>
                            <Roles/>
                            <AgeGroup/>
                            <VoiceChat/>
                            <MatchList/>
                        </Segment>
                    </Form>
                </div>
            </div>
        );
    }
}