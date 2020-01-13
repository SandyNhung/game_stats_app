import { gql } from 'apollo-boost'

const getSummonerQuery = gql`
  query getSummoner($name: String, $region: String) {
    summoner(name: $name, region: $region) {
      name
      accountId
      id
    }
  }
`

const getRegions = gql`
  {
    regions
  }
`

const getLiveMatch = gql`
  query getLiveMatch($id: String, $region: String) {
    livematch(id: $id, region: $region) {
      gameId
      participants {
        teamId
        champion {
          img
          name
          info {
            attack
            defense
            magic
          }
        }
        summonerName
        summonerRank {
          tier
          rank
        }
      }
    }
  }
`

export { getSummonerQuery, getRegions, getLiveMatch }
