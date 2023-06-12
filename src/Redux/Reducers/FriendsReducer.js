let initial = {
    data: [
        { id: 1, name: 'one' }
    ],
    others:[
        
    ],
    dataRef: 'qwe'
}

let FriendsReducer = (state = initial, action) => {
    let stateCopy = { ...state }
    if (action.type === 'DATA_CHECK') {
        debugger
        stateCopy.dataRef = action.dataRef;
        return stateCopy
    }
    else if(action.type === 'FRIENDS_CHECKER'){
        return {...state, others: [...action.others]}
    }
    return stateCopy;
}
export default FriendsReducer;