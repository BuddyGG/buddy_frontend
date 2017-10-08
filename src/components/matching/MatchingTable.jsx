import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class MatchingTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            matches: [1,2,3]
        }
    }
    componentDidMount = () => {
        console.log("Mounted!!")
    }


    render () {   
        return (
            <div className="match-table">
                <Segment>
                <h1> Matches! </h1>
                <div>
                    {this.matchList}
                </div>
                </Segment>
            </div>
        );
    }
}