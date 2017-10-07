import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import { interval1, interval2, interval3 } from '../../config/AgeIntervals'

export default class AgeGroup extends Component {
  
  setAgeInterval1 = () => this.props.handleChange(interval1)
  setAgeInterval2 = () => this.props.handleChange(interval2)
  setAgeInterval3 = () => this.props.handleChange(interval3)

  render() {
    return (    
        <Form.Group inline>
          <Form.Field>
            <Checkbox
              radio
              label={interval1}
              value="13"
              checked={this.props.value === interval1}
              onChange={this.setAgeInterval1}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label={interval2}
              value="20"
              checked={this.props.value === interval2}
              onChange={this.setAgeInterval2}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label={interval3}
              value="29"
              checked={this.props.value === interval3}
              onChange={this.setAgeInterval3}
            />
          </Form.Field>
        </Form.Group>
    );
  }
}