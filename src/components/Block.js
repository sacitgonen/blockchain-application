import React, {useState, useEffect, useContext} from "react";
import {sha256} from "js-sha256";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {BlockListContext} from "../BlockListContext";
import {useSelector} from "react-redux/es/index";

function Block({blockIndex}) {

    //const {updateBlockList} = useContext(BlockListContext);
    const dispatcher = useDispatch();
    const {blockNumber, preHash, hash, nonce} = useSelector((reduxState) => reduxState.blockList[blockIndex]);


    const [data, setData] = useState("");

    const handleOnChange = (event) => {
        setData(event.target.value);
    };

    useEffect(() => {
        //updateBlockList(blockNumber, sha256(`${data}${preHash}`));
        dispatcher({
            type: "UPDATE_BLOCK",
            blockNumber,
            nextHash: sha256(`${data}${preHash}`),
            nextNonce: 0
        });
    }, [preHash, data]);

    return (
        <div className="Block">
            <form>
                <h2>Block {blockNumber}</h2>

                <label>data: </label>
                <input value={data} onChange={handleOnChange}/>
                <br/>
                <label>nonce: </label>
                <input value={nonce} readOnly={true}/>
                <br/>
                <label>preHash: </label>
                <input value={preHash} readOnly={true}/>
                <br/>
                <label>hash: </label>
                <input value={hash} readOnly={true}/>
                <br/>
            </form>
        </div>
    );
}

export default Block;