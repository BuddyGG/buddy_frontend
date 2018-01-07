import React, { Component } from 'react';
import { Form, Table, Image, Divider } from 'semantic-ui-react'
import Top_Icon from '../../../../icons/Top_icon.png';
import Jungler_Icon from '../../../../icons/Jungler_icon.png';
import Mid_Icon from '../../../../icons/Mid_icon.png';
import Bot_Icon from '../../../../icons/Bot_icon.png';
import Support_Icon from '../../../../icons/Support_icon.png';

export default class Positions extends Component {
    render () {
        return (
            <div className="criteria test">
                <Divider className="criteria-header" inverted horizontal>Positions</Divider>
                
                <Form.Group className="criteria-content no-margin">
                    <Table basic="very" compact="very" textAlign="center" className="criteria-positions">
                        <Table.Body>
                        <Table.Row>
                            <Table.Cell><Image onClick={this.props.onChange} name="top" centered src={Top_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image onClick={this.props.onChange} name="jungle" centered src={Jungler_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image onClick={this.props.onChange} name="mid" centered src={Mid_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image onClick={this.props.onChange} name="marksman" centered src={Bot_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image onClick={this.props.onChange} name="support" centered src={Support_Icon} size='mini'/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Form.Field onChange={this.props.onChange} name="top" checked={this.props.positions.top} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field onChange={this.props.onChange} name="jungle" checked={this.props.positions.jungle} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field onChange={this.props.onChange} name="mid" checked={this.props.positions.mid} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field onChange={this.props.onChange} name="marksman" checked={this.props.positions.marksman} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field onChange={this.props.onChange} name="support" checked={this.props.positions.support} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </Form.Group>
            </div>
        );
    }
}