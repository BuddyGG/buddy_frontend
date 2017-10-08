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
        const socket = new Socket("wss://lolbuddy.herokuapp.com/socket");
  
        socket.connect();  
        
        this.connectToChannel(socket, this.state.playerInfo);
      }

    connectToChannel = (socket, player) => {
        const id = this.state.id
        const channel = socket.channel(`players:${id}`, {
            payload: player
        });

        this.setState({
            channel: channel
        })
        
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

        channel.on('match_requested', (response) => {
            console.log("MATCH REQUESTED: " + JSON.stringify(response))
        })
    }
  
    addNewPlayer = (player) => {
        this.setState({matches:[...this.state.matches, player]});
    }

    requestMatch = (player) => {
        console.log("requestinnnngggg")
        console.log(JSON.stringify(player))

        const channel = this.state.channel
        channel.push('request_match_response', player)
            .receive('ok', () => console.log("OK"))
    }

    leaveChannel = (channel) => {
        channel.leave();
    }

    render () {
        return (
            <div className="main-content">
                <div className="width-control2">
                    <YourCriteria/>
                    <MatchingTable matches={this.state.matches} requestMatch={this.requestMatch}/>
                </div>
            </div>
        );
    }
}