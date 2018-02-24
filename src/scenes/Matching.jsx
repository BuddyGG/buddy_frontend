import React, { Component } from 'react';
import CriteriaList from '../components/matching/CriteriaList/CriteriaList'
import MatchingTable from '../components/matching/MatchTable/MatchTable'
import MatchRequestModal from '../components/matching/Modals/MatchRequestModal'
import RequestingMatchModal from '../components/matching/Modals/RequestingMatchModal'
import MatchResponseModal from '../components/matching/Modals/MatchResponseModal'
import LoLAmigoHeader from '../components/shared/LoLAmigoHeader';
import history from '../config/History';
import Notification from 'react-web-notification';

export default class Matching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            channel: this.props.channel,
            requestingModalOpen: false,
            requestedModalOpen: false,
            responseModalOpen: false,            
            responseMessage: false,
            timeLeft: 50,
            ignore: true,
            title: ""
        }
    }

    componentWillMount = () => {
        // Go to frontpage if you don't have channel or criteria
        if(!this.state.channel){
            history.push(process.env.PUBLIC_URL + '/')
        } else {
         this.configureChannel(this.state.channel)         
        }    
    }

    componentWillUnmount = () => {
        var channel = this.state.channel;
        if(channel) channel.leave();
    }

    configureChannel = (channel) => {       
    
        channel.on('initial_matches', (response) => {
            console.log("initial_matches:")
            console.log(response)

            this.setState({
                matches: response.players
            });
        })
            
        channel.on('new_match', (response) => {
            console.log("new_match:")
            console.log(response)

            this.setState({
                matches:[...this.state.matches, response]
            });           
        })

        channel.on('match_requested', (response) => {
            console.log("match_requested")
            console.log(response)



            const playerIsBusy = this.state.requestedModalOpen || this.state.requestingModalOpen


            if (playerIsBusy){
                const responseMessage = {
                    id: response.id,
                    response: "Requested_Player_Busy"
                }
        
                this.state.channel.push('respond_to_request', responseMessage) 

            } else {
                const responseMessage = {
                    id: response.id,
                    response: "Requested_Player_Available"
                }

                this.state.channel.push('respond_to_request', responseMessage)
                this.setState({
                    otherPlayer: response
                }, () => {
                    this.requestedHandleOpen()
                    this.handleNotification()
                } )         
            }         
        })

        channel.on('remove_player', (response) => {
            console.log("Player left")
            this.removePlayer(response.id)
        })

        channel.on('request_response', (response) => {
            console.log("request_response:")
            console.log(response)

            const responseMessage = response.response;

            switch(responseMessage) {
                
                case "Request_Accepted":
                    this.handleAccept(responseMessage);
                    break;

                case "Request_Rejected":
                    this.handleReject(responseMessage);   
                    break;
                  
                case "Request_Cancelled":
                    this.handleCancel(responseMessage);                
                    break;

                case "Requested_Player_Available":
                    this.handleAvailable();
                    break;

                case "Requested_Player_Busy":
                    this.handleBusy(responseMessage);
                    break;
                
                default:
                    break;
            }                          
        })
    }
  
    handleAccept = (response) => {
        this.setState({
            responseMessage: response
        }, () => {
            this.requestedHandleClose()
            this.requestingHandleClose()
            this.props.matchFoundName(this.state.otherPlayer.name)
            history.push(process.env.PUBLIC_URL + '/matchfound')                        
        })
    }

    handleReject = (response) => {
        if (this.state.requestedModalOpen){
            this.requestedHandleClose()
        } else {
            this.setState({
                responseMessage: response
            }, () => {
                this.responseHandleOpen()
                this.requestingHandleClose()
            })
        }         
    }

    handleCancel = (response) => {
        if (this.state.requestingModalOpen){
            this.requestingHandleClose()
        } else {
            this.setState({
                responseMessage: response
            }, () => {
                this.responseHandleOpen()
                this.requestedHandleClose()
            })
        }    
    }

    handleAvailable = () => {
        this.requestingHandleOpen();
    }

    handleBusy = (response) => {
        this.setState({
            responseMessage: response
        }, () => {
            this.responseHandleOpen()
        })
    }

    removePlayer = (playerId) => {
        this.setState((prevState) => ({
          matches: prevState.matches.filter((match) => match.id !== playerId)
        }));
    }

    requestMatch = (player) => {
        console.log("request_match:")
        console.log(player)

        this.setState({otherPlayer: player})

        const playerInfo = {"player": player}
        this.state.channel.push('request_match', playerInfo)        
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
    
    updateCriteria = (criteria) => {
        // Handle criteria
        console.log(criteria)
        if(this.state.channel){
            const channel = this.state.channel
            channel.push('update_criteria', criteria)
        }    
    }

    handlePermissionGranted(){
        console.log('Permission Granted');
        this.setState({
          ignore: false
        });
      }
      handlePermissionDenied(){
        console.log('Permission Denied');
        this.setState({
          ignore: true
        });
      }
      handleNotSupported(){
        console.log('Web Notification not Supported');
        this.setState({
          ignore: true
        });
      }

    handleNotification = () => {

        if(this.state.ignore) {
            return;
        }

        const now = Date.now();

        const title = 'You matched with someone!';
        const body = this.state.otherPlayer.name + " wants to play with you.";
        const tag = now;
        // const icon = 'http://localhost:3000/Notifications_button_24.png';

        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
        tag: tag,
        body: body,
        lang: 'en',
        dir: 'ltr'
        }
        
        this.setState({
          title: title,
          options: options
        }); 
    }

    render () {
        return (
            <div className="main-content2">
                <div className="width-control2">
                    <LoLAmigoHeader/>
                    <CriteriaList onChangeCriteria={this.updateCriteria} criteria={this.props.criteria} />
                    <MatchingTable matches={this.state.matches} requestMatch={this.requestMatch}/>
                    
                    <Notification
                        ignore={this.state.ignore && this.state.title !== ''}
                        title={this.state.title}
                        options = {this.state.options}
                        notSupported={this.handleNotSupported.bind(this)}
                        onPermissionGranted={this.handlePermissionGranted.bind(this)}
                        onPermissionDenied={this.handlePermissionDenied.bind(this)}
                        timeout={5000}/>

                    <MatchRequestModal 
                        open={this.state.requestedModalOpen} 
                        handleOpen={this.requestedHandleOpen} 
                        handleClose={this.requestedHandleClose} 
                        player={this.state.otherPlayer}
                        timeLeft={this.state.timeLeft}
                        respondToRequest={this.respondToRequest}
                        handleAccept={this.handleAccept} />

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