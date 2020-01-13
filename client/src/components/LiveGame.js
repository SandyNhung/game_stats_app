import React from 'react'
import './LiveGame.css'
import { useQuery } from '@apollo/react-hooks'
import { getLiveMatch } from '../queries/queries'
import LogIn from './LogIn'
import { ResponsivePie } from '@nivo/pie'

function LiveGame() {
  const { loading, error, data } = useQuery(getLiveMatch, {
    variables: {
      id: localStorage.getItem('summonerId'),
      region: localStorage.getItem('region'),
    },
  })
  if (loading) return null
  if (error) return `Error: ${error}`
  if (data.livematch === null) return 'No Match was found!'

  const rank = rank => {
    if (rank.length === 0) {
      return <p>No rank found</p>
    }
    const rank_img_url = `../ranked-emblems/${rank[0].tier.toLowerCase()}.png`
    return (
      <div className="rank ">
        <img src={rank_img_url} alt={rank[0].tier} width="35" height="35"></img>
        <div>
          {rank[0].tier} {rank[0].rank}
        </div>
      </div>
    )
  }

  const champ_img = champion => {
    if (!champion)
      return (
        <img
          className="champ-img"
          src="../ranked-emblems/no_champ.jpg"
          alt="no champ img"></img>
      )
    return (
      <img className="champ-img" src={champion.img} alt={champion.name}></img>
    )
  }

  const team = teamId => {
    return data.livematch.participants
      .filter(teamid => teamid.teamId === teamId)
      .map(team => {
        if (teamId === 100) {
          return (
            <div className="columns" key={team.summonerName}>
              <div className="column is-one-fourth">
                {champ_img(team.champion)}
              </div>
              <div className="column">
                <h3 className=" title is-5">{team.summonerName}</h3>
                {rank(team.summonerRank)}
              </div>
            </div>
          )
        }
        return (
          <div className="columns has-text-right" key={team.summonerName}>
            <div className="column">
              <h3 className=" title is-5">{team.summonerName}</h3>
              {rank(team.summonerRank)}
            </div>
            <div className="column is-one-fourth">
              {champ_img(team.champion)}
            </div>
          </div>
        )
      })
  }

  const dataChart = teamId => {
    const participants = data.livematch.participants
      .filter(e => e.teamId === teamId && e.champion)
      .reduce((acc, obj) => {
        if (Object.entries(acc).length === 0) {
          acc = {
            magic: 0,
            defense: 0,
            attack: 0,
          }
        }
        console.log(acc)
        acc.magic += obj.champion.info.magic
        acc.defense += obj.champion.info.defense
        acc.attack += obj.champion.info.attack
        return acc
      }, {})
    const dataPower = [
      {
        id: 'magic',
        label: 'magic',
        value: participants.magic,
      },
      {
        id: 'defense',
        label: 'defense',
        value: participants.defense,
      },
      {
        id: 'attack',
        label: 'attack',
        value: participants.attack,
      },
    ]

    return (
      <ResponsivePie
        data={dataPower}
        pixelRatio={1}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
        animate={true}
        fit={true}
        enableRadialLabels={false}
        sliceLabel={d => `${d.id} (${d.value})`}
        motionStiffness={90}
        motionDamping={15}></ResponsivePie>
    )
  }

  return (
    <div className="container">
      <div className="column"></div>
      <LogIn />
      <div className="columns">
        <div className="column">{team(100)}</div>
        <div className="column has-text-centered chart-strength left-side">
          {dataChart(100)}
        </div>
        <div className="column has-text-centered chart-strength right-side">
          {dataChart(200)}
        </div>
        <div className="column">{team(200)}</div>
      </div>
    </div>
  )
}

export default LiveGame

//export const SearchChampContext = React.createContext(this.props.champions)
