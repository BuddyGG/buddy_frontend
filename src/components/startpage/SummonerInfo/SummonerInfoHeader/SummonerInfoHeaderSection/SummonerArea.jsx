import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { getSummonerIcon } from "../../../../../config/ChampImages";

export default class SummonerArea extends Component {
    render () {
        return (
            <div id="summoner-info">
                <div id="summoner-icon"> 
                    {getSummonerIcon(this.props.icon)} 
                </div>     
                <div id="summoner-name">
                    <Header inverted as='h3' textAlign='center'>
                        <Header.Content>
                            {this.props.name}
                            <Header.Subheader>
                            {this.props.league}
                            </Header.Subheader>
                        </Header.Content>
                    </Header>                                   
                </div>
            </div>  
        );
    }
}