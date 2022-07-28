import {useSelector} from "react-redux/es/index";
import Block from "./Block";
import {NavLink} from "react-router-dom";

function Blockchain() {
    //const {blockList} = useContext(BlockListContext);
    const blockListCount = useSelector((reduxState) => {
        return reduxState.blockList
    }).length;

    const blockJSXs = [];

    for (let i = 0; i < blockListCount; i++) {
        blockJSXs.push(<Block key={i} blockIndex={i}/>)
    }

    return <>
        <NavLink to="/">Go to Home Page</NavLink>
        <div className="App">
            {blockJSXs}
        </div>
    </>
}

export default Blockchain;