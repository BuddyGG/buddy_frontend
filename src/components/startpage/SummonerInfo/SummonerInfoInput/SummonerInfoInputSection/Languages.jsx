import React, { Component } from 'react';
import { Divider, Dropdown } from 'semantic-ui-react'

export default class Languages extends Component {
    render () {
        return (
            <div>
                <Divider inverted horizontal>Languages</Divider>
                <Dropdown placeholder='Select one or more languages' 
                        fluid 
                        multiple 
                        search 
                        selection 
                        options={this.props.languageOptions}
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        closeOnChange />
            </div>
        );
    }
}