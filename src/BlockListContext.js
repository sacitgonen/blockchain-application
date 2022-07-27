import React, {useState, createContext} from "react";

const BlockListContext = createContext(null);

const BlockListProvider = ({children}) => {

    const [blockList, setBlockList] = useState([
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
    ]);

    const updateBlockList = (index, newHash) => {
        const arrCopy = [...blockList];
        arrCopy[index].hash = newHash;
        if (index < blockList.length - 1) {
            arrCopy[index + 1].preHash = newHash;
        }
        setBlockList(arrCopy);
    };

    return (
        <BlockListContext.Provider value={{blockList, setBlockList, updateBlockList}}>
            {children}
        </BlockListContext.Provider>
    );
};

export {BlockListContext, BlockListProvider}