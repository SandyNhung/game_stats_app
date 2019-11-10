import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

const info = new GraphQLObjectType({
    name: 'championInfo',
    fields: () => ({
        attack: { type: GraphQLInt },
        defense: { type: GraphQLInt },
        magic: { type: GraphQLInt },
        difficulty: { type: GraphQLInt }
    })
});

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
        attackspeed: { type: GraphQLFloat }
    })
});

export default new GraphQLObjectType({
    name: 'champion',
    fields: () => ({
        name: { type: GraphQLString },
        key: { type: GraphQLString },
        info: {
            type: info
        },
        tags: { type: GraphQLList(GraphQLString) },
        stats: {
            type: stats
        }
    })
});

//tags: { type: GraphQLList },
