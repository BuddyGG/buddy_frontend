import React, { Component } from 'react';
import YourCriteria from '../components/matching/YourCriteria'
import MatchingTable from '../components/matching/MatchingTable'
import { Socket } from 'phoenix';

export default class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: null,
            id: null,
            matches: []
        }
    }

    componentDidMount = () => {
        this.setState({
            playerInfo: this.props.playerInfo,
            id: this.props.id
        }, () => {
            this.connectToSocket()
        })
    }

    componentWillUnmount = () => {
        // channel.leave
        //const socket = new Socket("ws://lolbuddy.herokuapp.com/socket");
        //socket.disconnect();
    }

    connectToSocket = () => {
        // const token = JSON.parse(localStorage.getItem('token'));
        const socket = new Socket("ws://lolbuddy.herokuapp.com/socket");
  
        socket.connect();  
        
        this.connectToChannel(socket, this.state.playerInfo);
      }

    connectToChannel = (socket, player) => {
        const id = this.state.id
        const channel = socket.channel(`players:${id}`, {
            payload: player
        });
        
        channel.join().receive('ok', (response) => {
            console.log("Succesfully connected to channel");
        });

        channel.on('new_players', (response) => {
            this.setState({
                matches: response.players
            }, function(){
                console.log(response)
            })
            console.log("Retrieved players!!")
        })
            
        channel.on('new_player', (response) => {
            this.addNewPlayer(response)
        })
    }
  
    addNewPlayer = (player) => {
        this.setState({matches:[...this.state.matches, player]});
    }

    leaveChannel = (channel) => {
        channel.leave();
    }

    render () {
        return (
            <div className="main-content">
                <div className="width-control2">
                    <YourCriteria/>
                    <MatchingTable matches={this.state.matches}/>
                </div>
            </div>
        );
    }
}