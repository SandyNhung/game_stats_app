export default (state= {}, action) => {
    switch(action.type){
        default:
            return state

        case 'FETCH_CHAMPIONS':
            return action.payload
    }
}