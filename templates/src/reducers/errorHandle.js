export default (state= {}, action) => {
    switch(action.type){
        default:
            return null

        case 'ERROR':
            return action.payload
    }
} 