import DataLoader from 'dataloader'
import axios from 'axios'

const championNamebyIds = async ids => {
  const res = await axios.get(
    'http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json',
  )
  let champions = []
  const data = Object.values(res.data.data)
  ids.forEach(e => {
    const findChampionById = data.find(c => c.key === e.toString())
    champions.push(findChampionById)
  })
  return champions
}

export default function getChampionName() {
  return new DataLoader(championNamebyIds)
}
