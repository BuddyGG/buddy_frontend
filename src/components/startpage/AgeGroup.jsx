import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class AgeGroup extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        interval1: "13-19",
        interval2: "20-29",
        interval3: "29+"
    }
  }

  setAgeInterval1 = () => this.props.handleChange(this.state.interval1)
  setAgeInterval2 = () => this.props.handleChange(this.state.interval2)
  setAgeInterval3 = () => this.props.handleChange(this.state.interval3)

  render() {
    const { interval1, interval2, interval3 } = this.state

    return (    
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              radio
              label='13-19'
              value="13"
              checked={this.props.value === interval1}
              onChange={this.setAgeInterval1}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='20-29'
              value="20"
              checked={this.props.value === interval2}
              onChange={this.setAgeInterval2}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='29+'
              value="29"
              checked={this.props.value === interval3}
              onChange={this.setAgeInterval3}
            />
          </Form.Field>
        </Form.Group>
    );
  }
}