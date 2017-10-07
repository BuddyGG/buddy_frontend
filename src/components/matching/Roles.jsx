import React, { Component } from 'react';
import { Form, Table, Image, Divider } from 'semantic-ui-react'
import Top_Icon from '../../icons/Top_icon.png';
import Jungler_Icon from '../../icons/Jungler_icon.png';
import Mid_Icon from '../../icons/Mid_icon.png';
import Bot_Icon from '../../icons/Bot_icon.png';
import Support_Icon from '../../icons/Support_icon.png';

export default class Roles extends Component {
    render () {
        return (
            <div className="criteria">
                <Divider className="criteria-header" inverted horizontal>Positions</Divider>
                
                <Form.Group className="criteria-content no-margin">
                    <Table basic="very" compact="very" textAlign="center">
                        <Table.Body>
                        <Table.Row>
                            <Table.Cell><Image centered src={Top_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image centered src={Jungler_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image centered src={Mid_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image centered src={Bot_Icon} size='mini'/></Table.Cell>
                            <Table.Cell><Image centered src={Support_Icon} size='mini'/></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Form.Field name="top" className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field name="jun" className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field name="mid" className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field name="adc" className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                            <Table.Cell><Form.Field name="sup" className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </Form.Group>
            </div>
        );
    }
}