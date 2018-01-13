export function convertLeague(summoner){

    if(!summoner || !summoner.leagues || !summoner.leagues.find(x => x.type === "RANKED_SOLO_5x5")){
        return "No leagues to show";
    }
     
    const RANKED_SOLO_5x5 = summoner.leagues.find(x => x.type === "RANKED_SOLO_5x5")   
    const convertedLeague = RANKED_SOLO_5x5.tier + " " + RANKED_SOLO_5x5.rank

    return convertedLeague
}
