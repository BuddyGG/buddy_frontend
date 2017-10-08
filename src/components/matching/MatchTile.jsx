import React from 'react';
import { Grid, Segment, Progress, Button } from 'semantic-ui-react'
import { getChampImage } from '../../config/ChampImages';
import { getRoleImage } from '../../config/RoleImages';
import { getFlagImage } from '../../config/FlagIcons';

export default function MatchTile(props) {
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
                        <div> {props.name} </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {props.champions.map((champ) => <div className="icon"> {getChampImage(champ)} </div>)}                       
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {props.positions.map((position) => <div className="icon"> {getRoleImage(position)} </div>)}                                                     
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {props.languages.map((language) => <div> {getFlagImage(language)} </div>)}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div> {props.comment} </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div> <Button primary compact> Apply </Button> </div>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}