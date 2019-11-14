


export default (state= {}, action) => {
    switch(action.type){
        default:
            return state

        case 'LOG_IN':
            return action.payload
    }
} 