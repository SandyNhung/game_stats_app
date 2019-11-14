import { gql } from 'apollo-boost';

const getSummonerQuery = gql`
    query getSummoner($name: String, $region: String) {
        summoner(name: $name, region: $region) {
            name
            accountId
        }
    }
`;

const getRegions = gql`
    {
        regions
    }
`;

export { getSummonerQuery, getRegions };
