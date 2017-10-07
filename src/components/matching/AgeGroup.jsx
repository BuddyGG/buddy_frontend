import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { Form, Checkbox } from 'semantic-ui-react'
import { interval1, interval2, interval3 } from '../../config/AgeIntervals'

export default class AgeGroup extends Component {
    render () {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Age Group</Divider>
                
                <Form.Group className="criteria-content no-margin" inline>
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
            </div>
        );
    }
}