import React, { Component } from 'react';
import { Table, Header, Popup } from 'semantic-ui-react'
import { getChampImage } from '../../../../../config/ChampImages';

export default class MostPlayed extends Component {

    render () {
        const style = {
            paddingTop: '2px',
            paddingBottom: '2px',
        }

        return (
            <div id="top-champs">
                <Header inverted className="no-margin-header" as="h5" textAlign='center'>Most played:</Header>
                <Table id="most-played-table" basic="very" compact="very" textAlign="center">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Popup position="top center" style={style} trigger={getChampImage(this.props.champ01)} content={this.props.champ01}/></Table.Cell>
                            <Table.Cell><Popup position="top center" style={style} trigger={getChampImage(this.props.champ02)} content={this.props.champ02}/></Table.Cell>
                            <Table.Cell><Popup position="top center" style={style} trigger={getChampImage(this.props.champ03)} content={this.props.champ03}/></Table.Cell>                   
                        </Table.Row>                   
                    </Table.Body>
                </Table>
            </div>    
        );
    }
}