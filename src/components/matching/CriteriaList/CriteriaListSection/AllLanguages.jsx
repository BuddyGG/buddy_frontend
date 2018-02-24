import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { Form, Checkbox } from 'semantic-ui-react'

export default class AllLanguages extends Component {
    
    render () {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Show all languages</Divider>
            
                <Form.Group className="no-margin criteria-content" inline>
                    <Form.Field inline>
                        <Checkbox
                        label='Show all languages'
                        checked={this.props.ignoreLanguage}
                        onChange={this.props.onChange} />
                    </Form.Field>                   
                </Form.Group>
            </div>
        );
    }
}