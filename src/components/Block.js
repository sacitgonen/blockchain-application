import React from "react";
import {sha256} from "js-sha256";

function Block(props) {
    return (
        <div className="block">
            block number: <input value={props.blockNumber} readOnly={true}/><br/>
            nonce: <input  value={props.nonce} readOnly={true}/><br/>
            data: <input value={props.data} onChange={event => {
            props.setData(event.target.value);
            props.setHash(sha256(event.target.value));
            props.setPreHash(sha256(event.target.value))
            }}/><br/>
            preHash: <input value={props.preHash} readOnly={true}/><br/>
            hash: <input value={props.hash} readOnly={true}/><br/>
        </div>
    );
}

export default Block;