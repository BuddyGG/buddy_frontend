import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react'


export default class Comment extends Component {
    render () {
        return (
            <div>
                <Divider inverted horizontal>Comments</Divider>
                <Form.TextArea maxLength="100" onChange={this.props.handleChange} value={this.props.comment} placeholder='Additional information (max. 100 characters)' />
            </div>
        );
    }
}