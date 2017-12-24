import React from 'react'
import { Image } from 'semantic-ui-react'


export function getChampImage(champ){
    let trimmedChamp = champ.replace(/\s/g,''); // Remove whitespace in champ name
    let trimmedChamp2 = trimmedChamp.replace("'",""); // Replace ' with whitespace
    let allLoverCase = trimmedChamp2.toLowerCase();
    let championString = capitalizeFirstLetter(allLoverCase);

    const champImageUrl = "https://ddragon.leagueoflegends.com/cdn/7.24.1/img/champion/" + championString + ".png";
    return <Image  centered shape="circular" src={champImageUrl} size='mini'/>;
}

export function getSummonerIcon(id){
    const champImageUrl = "https://ddragon.leagueoflegends.com/cdn/7.24.1/img/profileicon/" + id + ".png";
    return <Image shape="rounded" src={champImageUrl} size='tiny'/>;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}