export default (state= {}, action) => {
    switch(action.type){
        default:
            return state

        case 'SEARCH_CHAMPION':
            return action.payload
    }
} 