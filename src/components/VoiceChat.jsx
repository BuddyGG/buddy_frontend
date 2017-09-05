import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class VoiceChat extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>     
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              radio
              label='YES'
              name='checkboxRadioGroup'
              value="YES"
              checked={this.state.value === "YES"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='NO'
              name='checkboxRadioGroup'
              value="NO"
              checked={this.state.value === "NO"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    )
  }
}