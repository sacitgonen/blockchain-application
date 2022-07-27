import React, {useContext} from "react";
import Block from "./components/Block";
import './App.css';
import {BlockListContext} from "./BlockListContext";

function App() {

    const {blockList} = useContext(BlockListContext);

    return (
        <div className="App">
            {
                blockList.map((block) => {
                    return (
                        <Block key={block.blockNumber}
                               blockNumber={block.blockNumber}
                               preHash={block.preHash}
                               hash={block.hash}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
