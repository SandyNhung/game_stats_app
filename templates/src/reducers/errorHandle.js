export default (state= '', action) => {
    switch(action.type){
        default:
            return state

        case 'ERROR':
            return action.payload
    }
} 