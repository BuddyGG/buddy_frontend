import React, { Component } from 'react';
import { Segment, Transition, List } from 'semantic-ui-react';
import MatchTile from './MatchTableTile/MatchTile'

export default class MatchTable extends Component {

    render () {
        const noMatches = (this.props.matches.length === 0)

        return (
            <div className="match-table">
                <Segment inverted>
                    
                    <div className={noMatches ? '' : 'hidden'} >
                        <div className="match-tile empty">
                            <h4>You currently have no matches!</h4>
                        </div>
                    </div>
                    
                    <Transition.Group
                        as={List}
                        duration={600}
                        divided
                        size='huge'
                        verticalAlign='middle'
                        animation="vertical flip"
                        className="no-margin"
                    >
                        {this.props.matches.map((match) =>
                            <List.Item key={match.id}>
                                <MatchTile requestMatch={this.props.requestMatch} match={match} />
                            </List.Item>
                        )}        
                    </Transition.Group>

                </Segment>
            </div>
        );
    }
}