import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
} from 'graphql'
import livematch from './liveMatch'
import matchesType from './matches'
import axios from 'axios'
import { riotApiKey } from '../../config'

export default new GraphQLObjectType({
  name: 'matches',
  fields: () => ({
    name: { type: GraphQLString },
    accountId: { type: GraphQLString },
    id: { type: GraphQLString },
    puuid: { type: GraphQLString },
    region: { type: GraphQLString },
    livematch: {
      type: livematch,
      resolve: ({ region, id }) =>
        axios
          .get(
            `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${riotApiKey}`,
          )
          .then(res => {
            //add region to field participants
            res.data.participants.forEach(e => {
              e.region = region
            })
            return res.data
          }),
    },
    matchesHistory: {
      type: new GraphQLList(matchesType),
      resolve: ({ region, accountId }) =>
        axios
          .get(
            `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${riotApiKey}`,
          )
          .then(res => {
            return res.data.matches
          }),
    },
  }),
})

//tags: { type: GraphQLList },
