import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react'

export default class MatchResponseModal extends Component {

    succes = () => {
        return (
            <div>
                <h4> 
                    You have succesfully matched with {this.props.player.name}!
                </h4>
                <h4> 
                    Add eachother in the League of Legends client and fight together on the Rift! 
                </h4>
            </div>
        )
    }

    fail = () => {
        return (
            <div>
                <h4> 
                    {this.props.player.name} has denied your request. :(
                </h4>
                <h4> 
                    Click close to return to your list of matches.
                </h4>
            </div>
        )
    }

    render () {
        const player = this.props.player
        const responseHeader = this.props.response ?            
            "Congratulations!" :
            "I don't know how to tell you this, but..." 
         
        return (
          <div>
            {player && 

              <Modal size="small" dimmer={"blurring"} className="modal" open={this.props.open} onClose={this.props.handleClose}>
              
                <Modal.Header> <h2> {responseHeader} </h2> </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <div className="response-message">
                            <div className="response-logo">
                                {this.props.response ? <Icon size="huge" color="green" name="check circle outline" /> : <Icon size="huge" color="red" name="remove circle outline"/>}
                            </div>
                            {this.props.response ? this.succes() : this.fail()}
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <div className="answer-bar">
                        <Button onClick={this.props.handleClose} primary> Okay </Button>   
                    </div>
                </Modal.Actions>
            </Modal>

            }
          </div>
            
        );
    }
}
