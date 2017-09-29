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
import { Socket } from 'phoenix';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {
        top: false,
        jun: false,
        mid: false,
        adc: false,
        sup: false
      },
      languageOptions: languages,
      value: [],
      voicechat: false,
      agegroup: "",
      comment: ""
    }
  }

  findMatches = () => {
    const {roles,value,voicechat,agegroup,comment} = this.state

    const submitData = {
      selectedRoles: roles,
      languages: value,
      voicechat: voicechat,
      agegroup: agegroup,
      comment: comment
    }

    this.props.submit(submitData);
  }

  toggleRole = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    let roles = this.state.roles;
    roles[name] = value;

    this.setState({
      roles: roles
    });
  }

  handleVoiceChat = (bool) => this.setState({ voicechat: bool })

  handleAgeGroup = (age) => {
    console.log(age)
    this.setState({ agegroup: age })
  }

  handleLanguage = (e, { value }) => {
    this.setState({value})
  }

  handleComment = (event) => this.setState({comment: event.target.value});

  render() {
    const { roles, languageOptions, value, voicechat, agegroup, comment } = this.state

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
                <Table.Cell><Form.Field onClick={this.toggleRole} name="top" checked={roles.top} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onClick={this.toggleRole} name="jun" checked={roles.jun} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onClick={this.toggleRole} name="mid" checked={roles.mid} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onClick={this.toggleRole} name="adc" checked={roles.adc} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
                <Table.Cell><Form.Field onClick={this.toggleRole} name="sup" checked={roles.sup} className="position-checkbox" control='input' type='checkbox' /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>    
        </Form.Group>
        
        <Divider inverted horizontal>Languages</Divider>
        <Dropdown placeholder='Select one or more languages' 
                  fluid 
                  multiple 
                  search 
                  selection 
                  options={languageOptions}
                  value={value}
                  onChange={this.handleLanguage}
                  closeOnChange />
        
        <Divider inverted horizontal>Voice chat?</Divider>
        <VoiceChat handleChange={this.handleVoiceChat} value={this.state.voicechat} />
        <Divider inverted horizontal>Age group</Divider>
        <AgeGroup handleChange={this.handleAgeGroup} value={this.state.agegroup}/>
        <Divider inverted horizontal>Comments</Divider>
        <Form.TextArea onChange={this.handleComment} value={this.state.comment} placeholder='Additional information' />
        <Button fluid primary type="submit">Find matches</Button>
      </Form>
    );
  }
}

export default SearchForm