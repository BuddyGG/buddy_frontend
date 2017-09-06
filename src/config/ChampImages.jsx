import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'


export function getChampImage(champ){
    const champImageUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + champ + ".png";
    return <Image centered src={champImageUrl} size='mini'/>;
}