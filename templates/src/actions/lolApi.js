import axios from 'axios'

//LOG IN TO GET IDS

export const logIn = (formValues) => (dispatch) => {
    return axios.get(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${formValues.summonerName}`,
                {   
                    'params': {
                        'api_key': 'RGAPI-bb36ea47-8360-4ea4-9058-7253a8a2ba8e'
                    },
                    proxy: {
                        host: 'http://localhost',
                        port: 3000
                      }
                })
    .then(res => {
        console.log(res)
        dispatch({type: 'LOG_IN', payload: res.data.data})    
    })
    .catch(e => {
        console.log(e)
        dispatch({type: 'ERROR', payload: 'Error! Please check your summoner name and regions! '})
    })
}