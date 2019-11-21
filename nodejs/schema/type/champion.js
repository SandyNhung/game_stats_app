import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
} from 'graphql'

const info = new GraphQLObjectType({
  name: 'championInfo',
  fields: () => ({
    attack: { type: GraphQLFloat },
    defense: { type: GraphQLFloat },
    magic: { type: GraphQLFloat },
    difficulty: { type: GraphQLFloat },
  }),
})

const stats = new GraphQLObjectType({
  name: 'stats',
  fields: () => ({
    hp: { type: GraphQLFloat },
    hpperlevel: { type: GraphQLFloat },
    mp: { type: GraphQLFloat },
    mpperlevel: { type: GraphQLFloat },
    movespeed: { type: GraphQLFloat },
    armor: { type: GraphQLFloat },
    armorperlevel: { type: GraphQLFloat },
    spellblock: { type: GraphQLFloat },
    spellblockperlevel: { type: GraphQLFloat },
    attackrange: { type: GraphQLFloat },
    hpregen: { type: GraphQLFloat },
    hpregenperlevel: { type: GraphQLFloat },
    mpregen: { type: GraphQLFloat },
    mpregenperlevel: { type: GraphQLFloat },
    crit: { type: GraphQLFloat },
    critperlevel: { type: GraphQLFloat },
    attackdamage: { type: GraphQLFloat },
    attackdamageperlevel: { type: GraphQLFloat },
    attackspeedperlevel: { type: GraphQLFloat },
    attackspeed: { type: GraphQLFloat },
  }),
})

export default new GraphQLObjectType({
  name: 'champion',
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLString },
    key: { type: GraphQLString },
    info: {
      type: info,
    },
    tags: { type: GraphQLList(GraphQLString) },
    stats: {
      type: stats,
    },
    img: {
      type: GraphQLString,
      resolve: ({ id }) => {
        return `http://ddragon.leagueoflegends.com/cdn/9.22.1/img/champion/${id}.png`
      },
    },
  }),
})

//tags: { type: GraphQLList },
