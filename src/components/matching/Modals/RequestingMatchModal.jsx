import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react'
import RequestingPlayerInfo from './RequestingPlayerInfo'
import ReactCountdownClock from "react-countdown-clock";


export default class RequestingMatchModal extends Component {

    cancel = () => {
        this.props.respondToRequest(this.props.player.id, "Request_Cancelled")
        this.props.handleClose()
    }

    render () {
        const player = this.props.player
        return (
          <div>
            {player && 

              <Modal dimmer={"blurring"} closeOnRootNodeClick={false} className="modal" open={this.props.open} onClose={this.props.handleClose}>
              
                <Modal.Header>Requesting match...</Modal.Header>
                <Modal.Content className="no-padding">
                    <RequestingPlayerInfo match={player}/>
                </Modal.Content>
                <Modal.Actions>
                    <div className="answer-bar">
                        <div className="button-box">
                            <Button negative onClick={this.cancel}> Cancel </Button>
                        </div>
                        <div className="countdown">
                            <ReactCountdownClock seconds={this.props.timeLeft} 
                                                    size="60" 
                                                    color="black" 
                                                    onComplete={this.reject}
                                                    showMilliseconds="false"/>
                        </div>
                    </div>
                </Modal.Actions>
            </Modal>

            }
          </div>
            
        );
    }
}
