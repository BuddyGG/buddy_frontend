import React, { Component } from 'react';
import { Segment, Transition, List } from 'semantic-ui-react';
import MatchTile from './MatchTableTile/MatchTile'
import MatchTileHeader from './MatchTableTile/MatchTileHeader'
import { matchTileProps } from '../../../mocks/SummonerInfo'

export default class MatchTable extends Component {

    render () {
        const noMatches = (this.props.matches.length === 0)
        const state = { hide: 0, show: 500, visible: true }

        const { hide, show, visible } = state

        return (
            <div className="match-table">
                <Segment inverted>
                    <MatchTileHeader/>
                    <div className={noMatches ? '' : 'hidden'} >
                        <div className="match-tile empty">
                            <h4>You don't have any matches yet!</h4>
                        </div>
                    </div>
                    
                    <Transition.Group
                        as={List}
                        duration={{ hide, show }}
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