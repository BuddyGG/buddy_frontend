import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class AgeGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (    
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              radio
              label='13-19'
              name='13'
              value="13"
              checked={this.state.value === "13"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='20-29'
              name='20'
              value="20"
              checked={this.state.value === "20"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='29+'
              name='29'
              value="29"
              checked={this.state.value === "29"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
    );
  }
}