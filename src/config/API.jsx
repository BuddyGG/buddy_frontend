export const GET_SUMMONER_INFO = "https://lolbuddy.herokuapp.com/api/summoner/euw/HansP";

export const GET_SUMMONER_INFO_MOCK = {
   "data":{
      "region":"euw",
      "positions":[
         "marksman"
      ],
      "name":"Lethly",
      "leagues":[
         {
            "type":"RANKED_SOLO_5x5",
            "tier":"GOLD",
            "rank":"I"
         }
      ],
      "champions":[
         {
            "name":"Vayne",
            "id":67
         },
         {
            "name":"Caitlyn",
            "id":51
         },
         {
            "name":"Ezreal",
            "id":81
         }
      ]
   }
}