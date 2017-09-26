import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class VoiceChat extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (    
        <Form.Group inline className="centered-form-field">
          <Form.Field>
            <Checkbox
              radio
              label='YES'
              name='voicechatyes'
              value="YES"
              checked={this.state.value === "YES"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='NO'
              name='voicechatno'
              value="NO"
              checked={this.state.value === "NO"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
    );
  }
}