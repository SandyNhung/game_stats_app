import jsonApi from '../axios/jsonApi'


export const fetchChampions = () => dispatch => {
    return jsonApi.get('/champion.json')
    .then(res => {
        dispatch({type: 'FETCH_CHAMPIONS', payload: res.data.data})    
    })
    .catch(e => {
        dispatch({type: 'ERROR', payload: e.response})
    })
}