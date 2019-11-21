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

const matchesHistory = new GraphQLObjectType({
  name: 'championName',
  fields: () => ({
    gameId: { type: GraphQLFloat },
    timestamp: { type: GraphQLFloat },
    champion: { type: GraphQLInt },
    championName: {
      type: championType,
      description: 'champion',
      resolve: (matchesHistory, arg, { loaders }) =>
        loaders.getChampionName.load(matchesHistory.champion),
    },
  }),
})

export default matchesHistory
