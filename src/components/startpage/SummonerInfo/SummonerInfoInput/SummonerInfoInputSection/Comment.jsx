import React, { Component } from 'react';
import { Form, Divider } from 'semantic-ui-react'


export default class Comment extends Component {
    render () {
        return (
            <div>
                <Divider inverted horizontal>Comments</Divider>
                <Form.TextArea onChange={this.props.handleChange} value={this.props.comment} placeholder='Additional information' />
            </div>
        );
    }
}