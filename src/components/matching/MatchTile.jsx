import React, { Component } from 'react';
import { Grid, Segment, Progress, Button } from 'semantic-ui-react'
import { getChampImage } from '../../config/ChampImages';
import { getRoleImage } from '../../config/RoleImages';
import { getFlagImage } from '../../config/FlagIcons';

export default class MatchTile extends Component {
    constructor(props){
        super(props);
        
    }

    requestMatch = () => {
        console.log("Requesting match")
        this.props.requestMatch(this.props.match)
    }

    render () {
        return (
            <div className="shadow">
                <Segment inverted raised className="match-tile">
                    <Grid className="grid" columns='equal' verticalAlign='middle' divided>
                        <Grid.Column width={2}>
                            <Progress percent={80} inverted progress success>
                                Match score
                            </Progress>
                        </Grid.Column>
                        <Grid.Column>
                            <div> {this.props.match.name} </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.champions.map((champ) => <div className="icon"> {getChampImage(champ)} </div>)}                       
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.positions.map((position) => <div className="icon"> {getRoleImage(position)} </div>)}                                                     
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="inline">
                                {this.props.match.languages.map((language) => <div> {getFlagImage(language)} </div>)}
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div> {this.props.match.comment} </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div> <Button onClick={this.requestMatch} primary compact> Apply </Button> </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}