import React, { Component } from 'react';
import { Form, Divider, Table, Image } from 'semantic-ui-react'
import PositionTile from '../../../../small/PositionTile/PositionTile';
import Top_Icon from '../../../../../icons/Top_icon.png';
import Top_Icon_inactive from '../../../../../icons/Top_icon_inactive.png';
import Jungler_Icon from '../../../../../icons/Jungler_icon.png';
import Jungler_Icon_inactive from '../../../../../icons/Jungler_icon_inactive.png';
import Mid_Icon from '../../../../../icons/Mid_icon.png';
import Mid_Icon_inactive from '../../../../../icons/Mid_icon_inactive.png';
import Bot_Icon from '../../../../../icons/Bot_icon.png';
import Bot_Icon_inactive from '../../../../../icons/Bot_icon_inactive.png';
import Support_Icon from '../../../../../icons/Support_icon.png';
import Support_Icon_inactive from '../../../../../icons/Support_icon_inactive.png';

export default class Positions extends Component {
    render () {
        return (
            <div>
                <Divider inverted horizontal>Positions</Divider>
                <Form.Group inline id="positions">  
                    <PositionTile onClick={this.props.handleChange} active={this.props.roles.top} name="top" activeIcon={ Top_Icon } inactiveIcon={ Top_Icon_inactive }/>                    
                    <PositionTile onClick={this.props.handleChange} active={this.props.roles.jungle} name="jungle" activeIcon={ Jungler_Icon } inactiveIcon={ Jungler_Icon_inactive }/>
                    <PositionTile onClick={this.props.handleChange} active={this.props.roles.mid} name="mid" activeIcon={ Mid_Icon } inactiveIcon={ Mid_Icon_inactive }/>
                    <PositionTile onClick={this.props.handleChange} active={this.props.roles.marksman} name="marksman" activeIcon={ Bot_Icon } inactiveIcon={ Bot_Icon_inactive }/>
                    <PositionTile onClick={this.props.handleChange} active={this.props.roles.support} name="support" activeIcon={ Support_Icon } inactiveIcon={ Support_Icon_inactive }/>
                </Form.Group>
            </div>
        );
    }
}