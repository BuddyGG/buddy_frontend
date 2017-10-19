import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { Form, Checkbox } from 'semantic-ui-react'
import { interval1, interval2, interval3 } from '../../../../config/AgeIntervals'

export default class AgeGroups extends Component {
    render () {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Age Group</Divider>
                
                <Form.Group className="criteria-content no-margin" inline>
                    <Form.Field>
                        <Checkbox
                        label={interval1}
                        name="interval1"
                        checked={this.props.ageGroups.interval1}
                        onChange={this.props.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                        label={interval2}
                        name="interval2"
                        checked={this.props.ageGroups.interval2}
                        onChange={this.props.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                        label={interval3}
                        name="interval3"
                        checked={this.props.ageGroups.interval3}
                        onChange={this.props.onChange}
                        />
                    </Form.Field>
                </Form.Group>
            </div>
        );
    }
}