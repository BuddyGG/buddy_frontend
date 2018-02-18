import React, { Component } from 'react';
import { Grid, Button, Popup, Icon } from 'semantic-ui-react'
import { getChampImage } from '../../../../config/ChampImages';
import { getRoleImage } from '../../../../config/RoleImages';
import { getFlagImage } from '../../../../config/FlagIcons';
import { convertLeague } from '../../../../config/LeagueConverter';
import { ageGroups } from "../../../../config/AgeIntervals";

export default class MatchTile extends Component {
    requestMatch = () => {
        this.props.requestMatch(this.props.match)
    }

    openInNewTab = () =>  {
        var win = window.open(`http://${this.props.match.region}.op.gg/summoner/userName=${this.props.match.name}`, '_blank');
        win.focus();
    }

    render () {
        const style = {
            paddingTop: '2px',
            paddingBottom: '2px',
        }

        return (
            <div className="match-tile">
                <Grid className="grid" columns='equal' verticalAlign='middle' divided>
                    <Grid.Column>
                        <h5 className="inline">
                            <Button primary compact onClick={this.openInNewTab}> OP.GG</Button>
                        </h5>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <h5> {this.props.match.name} </h5>
                    </Grid.Column>
                    <Grid.Column>
                        <h5> {convertLeague(this.props.match.leagues)} </h5>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="inline">
                            {this.props.match.champions.map((champ) => <Popup position="top center" key={champ} style={style} trigger={<div className="icon">{getChampImage(champ)}</div>} content={champ}/>)}                       
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
                        <div className="language-box">
                            {ageGroups[this.props.match.age_group]}
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <h5 className="inline">
                            { 
                                this.props.match.voice.map((bool, index)=> {
                                    const icon = bool ? "microphone" : "microphone slash"
                                    return <Icon key={index} name={icon} size="large"/>
                                })
                            }
                        </h5>
                    </Grid.Column> 
                    <Grid.Column width={4}>
                        <h5 className="comment-box"> {this.props.match.comment} </h5>
                    </Grid.Column>
                    <Grid.Column>
                        <div> <Button onClick={this.requestMatch} primary compact> Request </Button> </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
