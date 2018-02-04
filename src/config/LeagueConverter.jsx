export function convertLeague(leagues){

    let convertedLeague = "";
    leagues.rank ? convertedLeague = leagues.tier + " " + leagues.rank : convertedLeague = leagues.tier

    return convertedLeague;
}




