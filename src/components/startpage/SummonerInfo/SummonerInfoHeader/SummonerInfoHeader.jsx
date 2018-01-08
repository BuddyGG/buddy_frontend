import React, { Component } from 'react';
import MostPlayed from './SummonerInfoHeaderSection/MostPlayed';
import SummonerArea from './SummonerInfoHeaderSection/SummonerArea';
import { Grid } from 'semantic-ui-react';

export default class SummonerInfoHeader extends Component {
    render () {
        return (
            <div>
                <Grid columns={2} inverted celled="internally">
                    <Grid.Column className="no-padding-column" verticalAlign="middle">                           
                        <SummonerArea icon={this.props.icon} name={this.props.name} league={this.props.league}/>
                    </Grid.Column>
                    <Grid.Column className="no-padding-column">
                        <MostPlayed champs={this.props.champions}/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}