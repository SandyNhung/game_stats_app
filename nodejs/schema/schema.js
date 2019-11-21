import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql'
import champion from './type/champion'
import regionData from './type/region'
import axios from 'axios'
import { riotApiKey } from '../config'
import summoner from './type/summoner'
import livematch from './type/liveMatch'

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    summoner: {
      type: summoner,
      args: {
        name: { type: GraphQLString },
        region: { type: GraphQLString },
      },
      resolve: (root, args) =>
        axios
          .get(
            `https://${args.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${args.name}?api_key=${riotApiKey}`,
          )
          .then(res => {
            res.data.region = args.region
            return res.data
          }),
    },
    livematch: {
      type: livematch,
      args: {
        region: { type: GraphQLString },
        id: { type: GraphQLString },
      },
      resolve: (root, arg) =>
        axios
          .get(
            `https://${arg.region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${arg.id}?api_key=${riotApiKey}`,
          )
          .then(res => {
            //add region to field participants
            res.data.participants.forEach(e => {
              e.region = arg.region
            })
            return res.data
          })
          .catch(e => {
            return e.response.status === 400 ? e.data : e
          }),
    },
    regions: {
      type: new GraphQLList(GraphQLString),
      resolve: () => {
        return regionData
      },
    },
    champion: {
      type: champion,
      args: {
        name: { type: GraphQLString },
        key: { type: GraphQLString },
      },
      resolve: (root, args) =>
        axios
          .get(
            'http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json',
          )
          .then(res => {
            return Object.values(res.data.data).find(e => e.key === args.key)
          }),
    },
    champions: {
      type: new GraphQLList(champion),
      resolve: (root, args) =>
        axios
          .get(
            `http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json`,
          )
          .then(res => {
            return Object.values(res.data.data)
          }),
    },
  },
})

export default new GraphQLSchema({
  query: queryType,
})
