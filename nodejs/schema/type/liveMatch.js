import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
} from 'graphql'

import championType from './champion'
//babel_preset not support async need to add this separate module
import 'babel-polyfill'
import axios from 'axios'
import { riotApiKey } from '../../config'

const participants = new GraphQLObjectType({
  name: 'participants',
  fields: () => ({
    region: { type: GraphQLString },
    teamId: { type: GraphQLInt },
    championId: { type: GraphQLInt },
    champion: {
      type: championType,
      description: 'champion',
      resolve: (participants, arg, { loaders }) =>
        loaders.getChampionName.load(participants.championId),
    },
    summonerName: { type: GraphQLString },
    summonerId: { type: GraphQLString },
    summonerRank: {
      type: GraphQLList(summonerRank),
      description: 'summonerRank',
      resolve: ({ region, summonerId }) =>
        axios
          .get(
            `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${riotApiKey}`,
          )
          .then(res => {
            const data = res.data.filter(e => e.queueType === 'RANKED_SOLO_5x5')
            return data
          }),
    },
    perks: { type: perks },
  }),
})

const summonerRank = new GraphQLObjectType({
  name: 'summonerRank',
  fields: () => ({
    tier: { type: GraphQLString },
    rank: { type: GraphQLString },
  }),
})

const perks = new GraphQLObjectType({
  name: 'perks',
  fields: () => ({
    perkStyle: { type: GraphQLInt },
    perkSubStyle: { type: GraphQLInt },
    perkIds: { type: GraphQLList(GraphQLString) },
  }),
})

export default new GraphQLObjectType({
  name: 'livematch',
  fields: () => ({
    gameId: { type: GraphQLString },
    participants: { type: GraphQLList(participants) },
  }),
})

//tags: { type: GraphQLList },
