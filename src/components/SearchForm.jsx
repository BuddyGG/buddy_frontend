import React, { Component } from 'react'
import VoiceChat from './VoiceChat';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Table, Image, Divider, Dropdown } from 'semantic-ui-react'
import { languages } from '../config/Languages';
import Top_Icon from '../icons/Top_icon.png';
import Jungler_Icon from '../icons/Jungler_icon.png';
import Mid_Icon from '../icons/Mid_icon.png';
import Bot_Icon from '../icons/Bot_icon.png';
import Support_Icon from '../icons/Support_icon.png';

class SearchForm extends Component {

  render() {
    return (
      <Form id="search-form">
        <Divider horizontal>Positions</Divider>
        <Form.Group inline id="positions">  
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
                <Table.Cell><Form.Field className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>    
        </Form.Group>
        
        <Divider horizontal>Languages</Divider>
        <Dropdown placeholder='Select one or more languages' fluid multiple search selection options={languages} />
        
        <Divider horizontal>Voice chat?</Divider>
        <VoiceChat />
      </Form>
    );
  }
}

export default SearchForm