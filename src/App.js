import React, {useState} from "react";
import {sha256} from "js-sha256";
import Block from "./components/Block";
import './App.css';

function App() {

    const [blockNumber0, setBlockNumber0] = useState();
    const [nonce0, setNonce0] = useState();
    const [data0, setData0] = useState("");
    const [preHash0, setPreHash0] = useState();
    const [hash0, setHash0] = useState();

    const [blockNumber1, setBlockNumber1] = useState();
    const [nonce1, setNonce1] = useState();
    const [data1, setData1] = useState("");
    const [preHash1, setPreHash1] = useState();
    const [hash1, setHash1] = useState();

    const [blockNumber2, setBlockNumber2] = useState();
    const [nonce2, setNonce2] = useState();
    const [data2, setData2] = useState("");
    const [preHash2, setPreHash2] = useState();
    const [hash2, setHash2] = useState();

    const [blockNumber3, setBlockNumber3] = useState();
    const [nonce3, setNonce3] = useState();
    const [data3, setData3] = useState("");
    const [preHash3, setPreHash3] = useState();
    const [hash3, setHash3] = useState();


    return (
        <div>
            <Block
                blockNumber={blockNumber0}
                nonce={nonce0}
                data={data0}
                preHash={preHash0}
                hash={hash0}
                setData={setData0}
                setHash={setHash0}
                setPreHash={setPreHash1}
            />
            <Block
                blockNumber={blockNumber1}
                nonce={nonce1}
                data={data1}
                preHash={preHash1}
                hash={hash1}
                setData={setData1}
                setHash={setHash1}
                setPreHash={setPreHash2}
            />
            <Block
                blockNumber={blockNumber2}
                nonce={nonce2}
                data={data2}
                preHash={preHash2}
                hash={hash2}
                setData={setData2}
                setHash={setHash2}
                setPreHash={setPreHash3}
            />
            <Block
                blockNumber={blockNumber3}
                nonce={nonce3}
                data={data3}
                preHash={preHash3}
                hash={hash3}
                setData={setData3}
                setHash={setHash3}
                setPreHash={setPreHash0}
            />
        </div>
    );
}

export default App;
