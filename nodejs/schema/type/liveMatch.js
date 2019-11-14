import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

const participants = new GraphQLObjectType({
    name: 'participants',
    fields: () => ({
        teamId: { type: GraphQLInt },
        championId: { type: GraphQLInt },
        summonerName: { type: GraphQLString },
        summonerId: { type: GraphQLString },
        perks: {
            type: perks
        }
    })
});

const perks = new GraphQLObjectType({
    name: 'perks',
    fields: () => ({
        perkStyle: { type: GraphQLInt },
        perkSubStyle: { type: GraphQLInt },
        perkIds: { type: GraphQLList(GraphQLString) }
    })
});

export default new GraphQLObjectType({
    name: 'livematch',
    fields: () => ({
        gameId: { type: GraphQLString },
        participants: { type: GraphQLList(participants) }
    })
});

//tags: { type: GraphQLList },
