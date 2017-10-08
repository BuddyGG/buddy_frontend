import React, { Component } from 'react';
import { Form, Checkbox, Divider, Button } from 'semantic-ui-react'

export default class MatchList extends Component {
    render () {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>MatchList</Divider>
                <Form.Group className="criteria-content no-margin">
                    <Form.Field>
                        <Checkbox label='Automatically refresh list'/>
                    </Form.Field>
                    <Form.Field>
                        <Button primary compact>Refresh</Button>
                    </Form.Field>
                </Form.Group>
            </div>
        );
    }
}