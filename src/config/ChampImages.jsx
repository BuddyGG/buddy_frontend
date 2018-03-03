import React from 'react'
import { Image } from 'semantic-ui-react'

const outliers = ["Wukong","Jarvan IV","Kog'Maw","Dr. Mundo","Vel'Koz", "Xin Zhao", "Lee Sin", "Master Yi", "Twisted Fate"];

export function getChampImage(champ){
    let championString;

    if(outliers.includes(champ)){
        championString = handleOutliers(champ)
    } else {
        let trimmedChamp = champ.replace(/\s/g,''); // Remove whitespace in champ name
        let trimmedChamp2 = trimmedChamp.replace("'",""); // Replace ' with whitespace
        let allLoverCase = trimmedChamp2.toLowerCase();
        championString = capitalizeFirstLetter(allLoverCase);
    }
    
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

function handleOutliers (champ){
    let convertedChamp;

    switch(champ) {
        case "Wukong":
            convertedChamp = "MonkeyKing";
            break;
            
        case "Jarvan IV":
            convertedChamp = "JarvanIV";
            break;

        case "Kog'Maw":
            convertedChamp = "KogMaw";   
            break;

        case "Dr. Mundo":
            convertedChamp = "DrMundo";   
            break;

        case "Vel'Koz":
            convertedChamp = "Velkoz";   
            break;

        case "Xin Zhao":
            convertedChamp = "XinZhao";   
            break;
            
        case "Lee Sin":
            convertedChamp = "LeeSin";   
            break;
            
        case "Master Yi":
            convertedChamp = "MasterYi";   
            break;

        case "Twisted Fate":
            convertedChamp = "TwistedFate";   
            break;
               
        default:
            break;
    }

    return convertedChamp;
}