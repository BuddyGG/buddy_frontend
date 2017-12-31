export function convertLeague(leagues){
     
    const RANKED_SOLO_5x5 = leagues.find(x => x.type === "RANKED_SOLO_5x5")   
    const convertedLeague = RANKED_SOLO_5x5.tier + " " + RANKED_SOLO_5x5.rank

    return convertedLeague
}
