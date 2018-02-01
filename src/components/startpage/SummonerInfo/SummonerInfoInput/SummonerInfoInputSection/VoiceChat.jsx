import React, { Component } from 'react'
import { Form, Checkbox, Divider } from 'semantic-ui-react'

export default class VoiceChat extends Component {
  render() {
    return (
      <div>    
        <Divider inverted horizontal>Voice chat?</Divider>
        <Form.Group inline className="centered-form-field">
          <Form.Field>
            <Checkbox
              radio
              label='YES'
              checked={this.props.voicechat.length===1 && this.props.voicechat[0] === true}
              onChange={this.props.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='NO'
              checked={this.props.voicechat.length===1 && this.props.voicechat[0] === false}
              onChange={this.props.handleChange}
            />
          </Form.Field>  
          <Form.Field>
            <Checkbox
              radio
              label="I don't care"
              checked={this.props.voicechat.length === 2}
              onChange={this.props.handleChange}
            />
          </Form.Field>              
        </Form.Group>
      </div>
    );
  }
}