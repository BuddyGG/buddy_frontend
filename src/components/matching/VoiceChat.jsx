import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { Form, Checkbox } from 'semantic-ui-react'

export default class VoiceChat extends Component {
    
    render () {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Voice Chat</Divider>
            
                <Form.Group className="no-margin criteria-content" inline>
                    <Form.Field inline>
                        <Checkbox
                        radio
                        label='YES'/>
                    </Form.Field>

                    <Form.Field>
                        <Checkbox
                        radio
                        label='NO'/>
                    </Form.Field>
                </Form.Group>
            </div>
        );
    }
}