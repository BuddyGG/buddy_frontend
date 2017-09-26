import React, { Component } from 'react'
import VoiceChat from './VoiceChat';
import AgeGroup from './AgeGroup';
import { Form, Table, Image, Divider, Dropdown, Button } from 'semantic-ui-react'
import { languages } from '../../config/Languages';
import Top_Icon from '../../icons/Top_icon.png';
import Jungler_Icon from '../../icons/Jungler_icon.png';
import Mid_Icon from '../../icons/Mid_icon.png';
import Bot_Icon from '../../icons/Bot_icon.png';
import Support_Icon from '../../icons/Support_icon.png';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {
        top: false,
        jungle: false,
        mid: false,
        adc: false,
        support: false
      },
      languages: {
        danish: false,
        english: false,
        korean: false
      },
      voicechat: false,
      agegroup: "",
      comment: ""
    }
  }

  findMatches = () => {
    console.log("finding matches..");
  }

  toggleRoles = (roleIndex) => {

  }

  render() {
    return (
      <Form inverted id="search-form" onSubmit={this.findMatches}>
        <Divider inverted horizontal>Positions</Divider>
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
                <Table.Cell><Form.Field onChange={this.toggleRoles(0)} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onChange={this.toggleRoles(1)} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onChange={this.toggleRoles(2)} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onChange={this.toggleRoles(3)} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onChange={this.toggleRoles(4)} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>    
        </Form.Group>
        
        <Divider inverted horizontal>Languages</Divider>
        <Dropdown placeholder='Select one or more languages' fluid multiple search selection options={languages} />
        
        <Divider inverted horizontal>Voice chat?</Divider>
        <VoiceChat />
        <Divider inverted horizontal>Age group</Divider>
        <AgeGroup />
        <Divider inverted horizontal>Comments</Divider>
        <Form.TextArea placeholder='Additional information' />
        <Button fluid primary type="submit">Find matches</Button>
      </Form>
    );
  }
}

export default SearchForm