const initialState = {
    blockList: [
        {
            blockNumber: 0,
            nonce: 0,
            preHash: "0",
            hash: "0"
        },
        {
            blockNumber: 1,
            nonce: 1,
            preHash: "1",
            hash: "1"
        },
        {
            blockNumber: 2,
            nonce: 2,
            preHash: "2",
            hash: "2"
        },
        {
            blockNumber: 3,
            nonce: 3,
            preHash: "3",
            hash: "3"
        }
    ]
};

const reducer = (state = initialState, action) => {
    let newState = {...state};
    let tempBlocks = [...newState.blockList];
    if(action.type === 'ADD_BLOCK'){
        if(action.value !== null && action.value !== undefined) {
            tempBlocks.push(action.value);
        }
        newState.blockList = [...tempBlocks];
        return newState;
    }
    if(action.type === 'DELETE_BLOCK'){
        if(action.key !== null && action.key !== undefined && newState[action.key]){
            tempBlocks.splice(action.key, 1);
        }
        newState.blockList = [...tempBlocks];
        return newState;
    }
    if(action.type === 'UPDATE_BLOCK'){
        tempBlocks[action.blockNumber].nonce = action.nextNonce;
        tempBlocks[action.blockNumber].hash = action.nextHash;
        if(action.blockNumber + 1 < tempBlocks.length){
            tempBlocks[action.blockNumber + 1].preHash = action.nextHash;
        }
        newState.blockList = [...tempBlocks];
        return newState;
    }
    return newState;
};

export default reducer;
