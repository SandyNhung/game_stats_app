import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';
import champion from './type/champion';
import axios from 'axios';
import { riotApiKey } from '../config';

//GraphQL schema
const summonerName = new GraphQLObjectType({
    name: 'SummonerName',
    fields: () => ({
        name: { type: GraphQLString },
        accountId: { type: GraphQLString }
    })
});
const regionData = [
    'BR1',
    'EUN1',
    'EUW1',
    'JP1',
    'KR',
    'LA1',
    'LA2',
    'NA1',
    'OC1',
    'TR1',
    'RU'
];
const regions = new GraphQLList(GraphQLString);

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        summoner: {
            type: summonerName,
            args: {
                name: { type: GraphQLString },
                region: { type: GraphQLString }
            },
            resolve: (root, args) =>
                axios
                    .get(
                        `https://${args.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${args.name}?api_key=${riotApiKey}`
                    )
                    .then(res => {
                        console.log(res.data);
                        return res.data;
                    })
        },
        regions: {
            type: regions,
            resolve: () => {
                console.log(regionData);
                return regionData;
            }
        },
        champion: {
            type: champion,
            args: {
                name: { type: GraphQLString },
                key: { type: GraphQLString }
            },
            resolve: (root, args) =>
                axios
                    .get(
                        'http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json'
                    )
                    .then(res => {
                        return Object.values(res.data.data).find(
                            e => e.key === args.key
                        );
                    })
        },
        champions: {
            type: new GraphQLList(champion),
            resolve: (root, args) =>
                axios
                    .get(
                        `http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json`
                    )
                    .then(res => {
                        return Object.values(res.data.data);
                    })
        }
    }
});

export default new GraphQLSchema({
    query: queryType
});
