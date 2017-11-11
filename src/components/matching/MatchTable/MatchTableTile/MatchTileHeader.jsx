import React from 'react';
import { Grid } from 'semantic-ui-react'

export default function MatchTileHeader() {
    return (
        <div className="match-tile">
        <Grid className="grid match-tile-header" columns='equal' verticalAlign='middle' divided>
            <Grid.Column width={2}>
                <h4> Player name </h4>
            </Grid.Column>
            <Grid.Column>
                <h4> League </h4>
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
            <Grid.Column>
                <h4> Voice chat? </h4>
            </Grid.Column>
            <Grid.Column width={4}>
                <h4> Comment </h4>
            </Grid.Column>
            <Grid.Column>
                
            </Grid.Column>
        </Grid>
        </div>
    )
}