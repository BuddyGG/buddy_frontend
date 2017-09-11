import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'


export function getChampImage(champ){
    let trimmedChamp = champ.replace(/\s/g,'');
    if(trimmedChamp === "Cho'Gath"){ //TODO: Fix
        trimmedChamp = "Chogath"
    }
    const champImageUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + trimmedChamp + ".png";
    return <Image centered src={champImageUrl} size='mini'/>;
}

export function getSummonerIcon(id){
    const champImageUrl = "http://opgg-static.akamaized.net/images/profile_icons/profileIcon" + id + ".jpg";
    return <Image shape="rounded" src={champImageUrl} size='tiny'/>;
}