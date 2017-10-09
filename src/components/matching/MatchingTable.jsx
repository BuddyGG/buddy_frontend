import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import MatchTile from './MatchTile'

export default class MatchingTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            matches: []
        }
    }

    componentWillReceiveProps = (props) => {
        this.setState({
            matches: props.matches
        })
    }

    renderMatchList = () => {
        return this.state.matches.map((match) =>
            <MatchTile key={match.id} requestMatch={this.props.requestMatch} match={match} />
        );
    }

    render () {   
        return (
            <div className="match-table">
                <Segment inverted>
                    <div>
                        {this.renderMatchList()}            
                    </div>
                </Segment>
            </div>
        );
    }
}