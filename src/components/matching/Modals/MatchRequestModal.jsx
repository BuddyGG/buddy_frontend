import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import RequestingPlayerInfo from './RequestingPlayerInfo'
import { Button } from 'semantic-ui-react'
import ReactCountdownClock from "react-countdown-clock";

export default class MatchRequestModal extends Component {

    reject = () => {
        this.props.respondToRequest(this.props.player.id, "Request_Rejected")
        this.props.handleClose()
    }

    accept = () => {
        this.props.respondToRequest(this.props.player.id, "Request_Accepted")
        this.props.handleAccept("Request_Accepted")                       
    }

    render () {
        const player = this.props.player
        return (
          <div>
            {player && 

              <Modal dimmer={"blurring"} className="modal" open={this.props.open} onClose={this.props.handleClose}>
              
                <Modal.Header>Match found!</Modal.Header>
                <Modal.Content className="no-padding">
                    <RequestingPlayerInfo match={player}/>
                </Modal.Content>
                <Modal.Actions>
                    <div className="answer-bar">
                        <div className="button-box">
                            <Button negative onClick={this.reject}> Cancel </Button>
                        </div>
                        <div className="countdown">
                            <ReactCountdownClock seconds={this.props.timeLeft} 
                                                    size="60" 
                                                    color="black" 
                                                    onComplete={this.reject}
                                                    fontColor="white"
                                                    showMilliseconds="false"/>
                        </div>
                        <div className="button-box">
                            <Button positive onClick={this.accept}> Accept </Button>
                        </div>
                    </div>
                </Modal.Actions>
            </Modal>

            }
          </div>
            
        );
    }
}
