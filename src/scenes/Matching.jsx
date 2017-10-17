import React, { Component } from 'react';
import YourCriteria from '../components/matching/YourCriteria'
import MatchingTable from '../components/matching/MatchingTable'
import MatchRequestModal from '../components/matching/MatchRequestModal'
import RequestingMatchModal from '../components/matching/RequestingMatchModal'
import MatchResponseModal from '../components/matching/MatchResponseModal'
import { Socket } from 'phoenix';

export default class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: null,
            id: null,
            matches: [],
            requestingModalOpen: false,
            requestedModalOpen: false,
            responseModalOpen: true,            
            timeLeft: 30,
            responseMessage: false
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
            console.log("new_players:")
            console.log(response)

            this.setState({
                matches: response.players
            });
        })
            
        channel.on('new_player', (response) => {
            console.log("new_player:")
            console.log(response)

            this.setState({
                matches:[...this.state.matches, response]
            });           
        })

        channel.on('match_requested', (response) => {
            console.log("match_requested")
            console.log(response)

            this.setState({
                otherPlayer: response
            }, () => this.requestedHandleOpen() )
        })

        channel.on('requesting_match', (response) => {
            console.log("requesting_match")
            console.log(response)

            this.setState({
                otherPlayer: response
            }, () => this.requestingHandleOpen() )
        })

        channel.on('request_response', (response) => {
            console.log("request_response:")
            console.log(response)

            switch(response.response) {
                
                case "accept":
                    this.setState({
                        responseMessage: response.response
                    }, () => {
                        this.responseHandleOpen()
                        this.requestedHandleClose()
                        this.requestingHandleClose()                        
                    })
                    break;

                case "reject":
                    if (this.state.requestedModalOpen){
                        this.requestedHandleClose()
                    } else {
                        this.setState({
                            responseMessage: response.response
                        }, () => {
                            this.responseHandleOpen()
                            this.requestingHandleClose()
                        })
                    }                    
                    break;
                  
                case "cancel":
                    if (this.state.requestingModalOpen){
                        this.requestingHandleClose()
                    } else {
                        this.setState({
                            responseMessage: response.response
                        }, () => {
                            this.responseHandleOpen()
                            this.requestedHandleClose()
                        })
                    }                    
                    break;
                
                default:
                    break;
            }                          
        })
    }
  
    requestMatch = (player) => {
        console.log("request_match:")
        console.log(player)

        const playerInfo = {"player": player}
        const channel = this.state.channel

        channel.push('request_match', playerInfo)        
    }

    respondToRequest = (playerId, requestResponse) => {
        
        console.log("Responding to request!")

        const response = {
            id: playerId,
            response: requestResponse
        }

        const channel = this.state.channel
        channel.push('respond_to_request', response)           
    }

    requestedHandleOpen = () => this.setState({ requestedModalOpen: true })  
    requestedHandleClose = () => this.setState({ requestedModalOpen: false }) 

    requestingHandleOpen = () => this.setState({ requestingModalOpen: true })  
    requestingHandleClose = () => this.setState({ requestingModalOpen: false }) 

    responseHandleOpen = () => this.setState({ responseModalOpen: true })  
    responseHandleClose = () => this.setState({ responseModalOpen: false }) 

    render () {
        return (
            <div className="main-content">
                <div className="width-control2">
                    <YourCriteria/>
                    <MatchingTable matches={this.state.matches} requestMatch={this.requestMatch}/>
                    <MatchRequestModal 
                        open={this.state.requestedModalOpen} 
                        handleOpen={this.requestedHandleOpen} 
                        handleClose={this.requestedHandleClose} 
                        player={this.state.otherPlayer}
                        timeLeft={this.state.timeLeft}
                        respondToRequest={this.respondToRequest} />

                    <RequestingMatchModal 
                        open={this.state.requestingModalOpen} 
                        handleOpen={this.requestingHandleOpen} 
                        handleClose={this.requestingHandleClose} 
                        player={this.state.otherPlayer}
                        timeLeft={this.state.timeLeft}
                        respondToRequest={this.respondToRequest} />

                    <MatchResponseModal
                        open={this.state.responseModalOpen}
                        handleClose={this.responseHandleClose}
                        player={this.state.otherPlayer} 
                        response={this.state.responseMessage} /> 
                </div>
            </div>
        );
    }
}