import React, {useState, useEffect, useContext} from "react";
import {sha256} from "js-sha256";
import PropTypes from "prop-types";
import {BlockListContext} from "../BlockListContext";

function Block(props) {

    const {updateBlockList} = useContext(BlockListContext);

    const [data, setData] = useState("");
    const {blockNumber, preHash, hash} = props;

    const handleOnChange = (event) => {
        setData(event.target.value);
    };

    useEffect(() => {
        updateBlockList(blockNumber, sha256(`${data}${preHash}`));
    }, [preHash, data]);

    return (
        <div className="Block">
            <form>
                <h2>Block {blockNumber}</h2>

                <label>data: </label>
                <input value={data} onChange={handleOnChange}/>
                <br/>
                <label>nonce: </label>
                <input value={"props.nonce"} readOnly={true}/>
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

Block.defaultProps = {
    blockNumber: "-",
    preHash: "-",
    hash: "-",
};

Block.propTypes = {
    blockNumber: PropTypes.number,
    preHash: PropTypes.string,
    hash: PropTypes.string,
};