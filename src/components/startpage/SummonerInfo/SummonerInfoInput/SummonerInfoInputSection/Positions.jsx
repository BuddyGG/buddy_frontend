import React, { Component } from 'react';
import { Form, Divider, Table, Image } from 'semantic-ui-react'
import Top_Icon from '../../../../../icons/Top_icon.png';
import Jungler_Icon from '../../../../../icons/Jungler_icon.png';
import Mid_Icon from '../../../../../icons/Mid_icon.png';
import Bot_Icon from '../../../../../icons/Bot_icon.png';
import Support_Icon from '../../../../../icons/Support_icon.png';

export default class Positions extends Component {
    render () {
        return (
            <div>
                <Divider inverted horizontal>Positions</Divider>
                <Form.Group inline id="positions">  
                <Table basic="very" compact="very" textAlign="center">
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell><Image onClick={this.props.handleChange} name="top" centered src={Top_Icon} size='mini'/></Table.Cell>
                        <Table.Cell><Image onClick={this.props.handleChange} name="jungle" centered src={Jungler_Icon} size='mini'/></Table.Cell>
                        <Table.Cell><Image onClick={this.props.handleChange} name="mid" centered src={Mid_Icon} size='mini'/></Table.Cell>
                        <Table.Cell><Image onClick={this.props.handleChange} name="marksman" centered src={Bot_Icon} size='mini'/></Table.Cell>
                        <Table.Cell><Image onClick={this.props.handleChange} name="support" centered src={Support_Icon} size='mini'/></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Form.Field onClick={this.props.handleChange} name="top" checked={this.props.roles.top} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                        <Table.Cell><Form.Field onClick={this.props.handleChange} name="jungle" checked={this.props.roles.jungle} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                        <Table.Cell><Form.Field onClick={this.props.handleChange} name="mid" checked={this.props.roles.mid} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                        <Table.Cell><Form.Field onClick={this.props.handleChange} name="marksman" checked={this.props.roles.marksman} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                        <Table.Cell><Form.Field onClick={this.props.handleChange} name="support" checked={this.props.roles.support} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>    
                </Form.Group>
            </div>
        );
    }
}