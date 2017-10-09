import React, { Component } from 'react';
import { Header, Modal } from 'semantic-ui-react'

export default class MatchRequestModal extends Component {
    render () {
        const player = this.props.player
        return (
            <Modal open={this.props.open} close={this.props.handleClose}>
            <Modal.Header>Player {this.props.player} wants to play with you!</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        );
    }
}
