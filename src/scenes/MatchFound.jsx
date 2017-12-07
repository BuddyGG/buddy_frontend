import React, { Component } from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import history from '../config/History';

export default class MatchFound extends Component {

    componentWillMount = () => {
        // Go to frontpage if you don't have channel or criteria
        if(!this.props.name){
            history.push(process.env.PUBLIC_URL + '/')
        } 

        this.props.channel.leave();
    }

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
