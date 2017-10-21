import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

export default class ValidationMessage extends Component {
    render () {
        return (
            <Message negative className={ this.props.errorMessage ? '' : 'hidden'} >
                <Message.Header>
                    You need to fill out every field!
                </Message.Header>
            </Message>
        );
    }
}