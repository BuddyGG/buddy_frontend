import React, { Component } from 'react';
import YourCriteria from '../components/matching/YourCriteria'
import MatchingTable from '../components/matching/MatchingTable'
import MatchRequestModal from '../components/matching/MatchRequestModal'
import { Socket } from 'phoenix';

export default class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: null,
            id: null,
            matches: [],
            modalOpen: true,
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
        // const socket = new Socket("ws://lolbuddy.herokuapp.com/socket");
        // socket.disconnect();
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
                console.log("new_players:")
                console.log(response)
            })
        })
            
        channel.on('new_player', (response) => {
            this.addNewPlayer(response)
            console.log("new_player:")
            console.log(response)
        })

        channel.on('match_requested', (response) => {
            console.log("match_requested")
            console.log(JSON.stringify(response))
            this.setState({
                requestingPlayer: response
            }, () => this.handleOpen() )
        })

        channel.on('requesting_match', (response) => {
            console.log('requesting_match:')
            console.log(response)
        })
    }
  
    addNewPlayer = (player) => {
        this.setState({matches:[...this.state.matches, player]});
    }

    requestMatch = (player) => {
        console.log("request_match:")
        console.log(player)

        const playerInfo = {"player": player}

        const channel = this.state.channel
        channel.push('request_match', playerInfo)
            .receive('match_requested', () => console.log("match_requested!"))
    }

    handleOpen = () => this.setState({ modalOpen: true })  
    handleClose = () => this.setState({ modalOpen: false }) 

    leaveChannel = (channel) => {
        channel.leave();
    }

    render () {
        return (
            <div className="main-content">
                <div className="width-control2">
                    <YourCriteria/>
                    <MatchingTable matches={this.state.matches} requestMatch={this.requestMatch}/>
                    <MatchRequestModal open={this.state.modalOpen} handleOpen={this.handleOpen} handleClose={this.handleClose} player={this.state.requestingPlayer} />
                </div>
            </div>
        );
    }
}