import React, { Component } from 'react';
import { Header, Popup } from 'semantic-ui-react'
import { getChampImage } from '../../../../../config/ChampImages';

export default class MostPlayed extends Component {

    render () {
        const style = {
            paddingTop: '2px',
            paddingBottom: '2px',
        }



        return (
            <div id="top-champs">
                <Header inverted className="no-margin-header" as="h5" textAlign='center'>Recently most played:</Header>
                <div className="most-played">
                    {
                        this.props.champs.map((champ,index) => 
                            <div key={index}><Popup position="top center" style={style} trigger={getChampImage(champ)} content={champ}/></div>
                        )
                    }
                </div>
            </div>    
        );
    }
}