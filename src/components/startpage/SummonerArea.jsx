import React, { Component } from 'react';
import MostPlayed from './MostPlayed';
import { Grid, Header } from 'semantic-ui-react';
import { getSummonerIcon } from '../../config/ChampImages';

export default class SummonerArea extends Component {
    render () {
        return (
            <div>
                <Grid columns={2} inverted celled="internally">
                    <Grid.Column className="no-padding-column" verticalAlign="middle">                           
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
                    </Grid.Column>
                    <Grid.Column className="no-padding-column">
                        <MostPlayed champ01={this.props.champions[0]} champ02={this.props.champions[1]} champ03={this.props.champions[2]}/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}