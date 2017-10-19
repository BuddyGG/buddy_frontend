import React, { Component } from 'react';
import { Grid, Segment, Progress } from 'semantic-ui-react'
import { getChampImage } from '../../../config/ChampImages';
import { getRoleImage } from '../../../config/RoleImages';
import { getFlagImage } from '../../../config/FlagIcons';

export default class RequestingPlayerInfo extends Component {
    render () {
        return (
            <div>
                <Segment inverted raised className="match-tile">
                    <Grid className="grid" columns='equal' verticalAlign='middle' divided>
                    <Grid.Row className="no-padding bottom-border" textAlign="center">
                            <Grid.Column>    
                                <h4 >Match score </h4>                   
                            </Grid.Column>
                            <Grid.Column textAlign="center">
                                <h4 >Name </h4>
                            </Grid.Column>
                            <Grid.Column>
                                <h4> Most played </h4>
                            </Grid.Column>
                            <Grid.Column>
                                <h4> Positions </h4>
                            </Grid.Column>
                            <Grid.Column>
                                <h4> Languages </h4>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="match-found-player-bar" textAlign="center">
                            <Grid.Column>
                                <Progress className="no-margin" percent={80} inverted progress success></Progress>
                            </Grid.Column>
                            <Grid.Column >
                                <div> {this.props.match.name} </div>
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
                        </Grid.Row>
                        <Grid.Row textAlign="center">
                            <Grid.Column>
                            <h4 className="comment-header">Comment:</h4> {this.props.match.comment}
                            </Grid.Column>
                        </Grid.Row>                        
                    </Grid>
                </Segment>
            </div>
        )
    }
}