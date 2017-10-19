import React, { Component } from 'react'
import { Form, Checkbox, Divider } from 'semantic-ui-react'

export default class VoiceChat extends Component {

  setTrue = () => {
    this.props.handleChange(true)
  }

  setFalse = () => {
    this.props.handleChange(false)
  }

  render() {
    return (
      <div>    
        <Divider inverted horizontal>Voice chat?</Divider>
        <Form.Group inline className="centered-form-field">
          <Form.Field>
            <Checkbox
              radio
              label='YES'
              checked={this.props.value === true}
              onChange={this.setTrue}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='NO'
              checked={this.props.value === false}
              onChange={this.setFalse}
            />
          </Form.Field>
        </Form.Group>
      </div>
    );
  }
}