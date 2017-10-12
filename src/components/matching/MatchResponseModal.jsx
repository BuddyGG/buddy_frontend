import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default class MatchResponseModal extends Component {

    render () {
        const player = this.props.player
        const responseMessage = this.props.responseMessage ? "accepted!" : "declined!"
        return (
          <div>
            {player && 

              <Modal dimmer={"blurring"} className="modal" open={this.props.open} onClose={this.props.handleClose}>
              
                <Modal.Header>Match {responseMessage}</Modal.Header>
                <Modal.Content className="no-padding">
                    <Modal.Description>
                        You matched with {player.name}! Add him on League of Legends to play a game!
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary> Okay </Button>   
                </Modal.Actions>
            </Modal>

            }
          </div>
            
        );
    }
}
