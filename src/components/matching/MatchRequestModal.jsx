import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import RequestingPlayerInfo from './RequestingPlayerInfo'
import { player } from "../../mocks/SummonerInfo";

export default class MatchRequestModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            timeLeft: 10
        }
    }

    timeout = () => {
      console.log("time!")
      this.props.handleClose();
    }

    render () {
        //const player = this.props.player
        return (
          <div>
            {player && 

              <Modal dimmer={"blurring"} className="modal" open={this.props.open} close={this.props.handleClose}>
              
                <Modal.Header inverted>Match found!</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                      <RequestingPlayerInfo match={player} timeLeft={this.state.timeLeft} timeout={this.timeout} />
                  </Modal.Description>
                </Modal.Content>
            </Modal>

            }
          </div>
            
        );
    }
}
