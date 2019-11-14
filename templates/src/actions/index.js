import jsonApi from '../axios/jsonApi'


export const fetchChampions = () => (dispatch) => {
    dispatch({type: 'ERROR', payload: ''})
    return jsonApi.get('/champion.json')
    .then(res => {
        dispatch({type: 'FETCH_CHAMPIONS', payload: res.data.data})    
    })
    .catch(e => {
        dispatch({type: 'ERROR', payload: e.response})
    })
}

export const searchChampion = (name) => (dispatch, getState) => {
    dispatch({type: 'ERROR', payload:''})
    const champion = getState().championList
    dispatch({type: 'SEARCH_CHAMPION', payload: Object.entries(champion).find(([k,v]) => k === name )})
}