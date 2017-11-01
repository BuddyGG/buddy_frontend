import React, { Component } from 'react';
import { Grid, Segment, Progress, Button } from 'semantic-ui-react'
import { getChampImage } from '../../../../config/ChampImages';
import { getRoleImage } from '../../../../config/RoleImages';
import { getFlagImage } from '../../../../config/FlagIcons';
import { convertLeague } from '../../../../config/LeagueConverter';

export default class MatchTile extends Component {
    requestMatch = () => {
        this.props.requestMatch(this.props.match)
    }

    render () {
        return (
            <div className="shadow">
                <Segment inverted raised className="match-tile">
                    <Grid className="grid" columns='equal' verticalAlign='middle' divided>
                        <Grid.Column width={2}>
                            <div> {this.props.match.name} </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div> {convertLeague(this.props.match.leagues)} </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.champions.map((champ) => <div key={champ} className="icon"> {getChampImage(champ)} </div>)}                       
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.positions.map((position) => <div key={position} className="icon"> {getRoleImage(position)} </div>)}                                                     
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.languages.map((language) => <div key={language}> {getFlagImage(language)} </div>)}
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.voice.toString()}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="comment-box"> {this.props.match.comment} </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div> <Button onClick={this.requestMatch} primary compact> Request </Button> </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
