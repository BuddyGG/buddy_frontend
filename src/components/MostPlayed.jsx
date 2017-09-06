import React, { Component } from 'react';
import { Table, Image, Header } from 'semantic-ui-react'
import { getChampImage } from '../config/ChampImages';

export default class MostPlayed extends Component {
    constructor(props) {
        super(props)
    }

    getChampImage = (champ) => {
        const champImageUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + champ + ".png";
        return <Image centered src={champImageUrl} size='mini'/>;
    }

    render () {
        return (
            <div id="top-champs">
                <Table basic="very" compact="very" textAlign="center">
                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>{getChampImage(this.props.champ01)}</Table.Cell>
                        <Table.Cell>{getChampImage(this.props.champ02)}</Table.Cell>
                        <Table.Cell>{getChampImage(this.props.champ03)}</Table.Cell>                   
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><Header size='small'>50%</Header></Table.Cell>
                        <Table.Cell><Header size='small'>50%</Header></Table.Cell>
                        <Table.Cell><Header size='small'>50%</Header></Table.Cell>            
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>    
        );
    }
}