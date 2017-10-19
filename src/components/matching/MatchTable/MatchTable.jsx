import React, { Component } from 'react';
import { Segment, Transition, List } from 'semantic-ui-react';
import MatchTile from './MatchTableTile/MatchTile'

export default class MatchTable extends Component {

    noMatches = () => {
        return (
            <div className="match-tile empty">
                <h4>You currently have no matches!</h4>
            </div>
        )
    }

    someMatches = () => {
        return (
            <Transition.Group
                as={List}
                duration={600}
                divided
                size='huge'
                verticalAlign='middle'
                animation="vertical flip"
            >
                {this.props.matches.map((match) =>
                    <List.Item>
                        <MatchTile key={match.id} requestMatch={this.props.requestMatch} match={match} />
                    </List.Item>
                )}        
            </Transition.Group>
        )
    }

    render () {   
        return (
            <div className="match-table">
                <Segment inverted>
                    { this.props.matches.length === 0 ? this.noMatches() : this.someMatches() }
                </Segment>
            </div>
        );
    }
}