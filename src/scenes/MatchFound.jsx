import React, { Component } from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';


export default class MatchFound extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="width-control">
                    <Segment inverted padded="very" className="match-segment">       
                        <Header as='h1' textAlign="center">Match found!</Header>   
                        <div className="center-logo">
                            <Icon size="huge" color="green" name="check circle outline"  />
                        </div>
                        <h4> You have succesfully matched with <span className="match-name">{this.props.name}</span>!</h4>     
                        <h4>Add eachother in the League of Legends<sup>TM</sup> client and fight together on the Rift!</h4>       
                    </Segment>
                </div>                         
          </div>
        );
    }
}
