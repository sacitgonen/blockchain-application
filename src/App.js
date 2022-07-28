import React from "react";
import './App.css';
import {BlockListProvider} from "./BlockListContext";
import BlockStore from "./BlockStore";
import {Provider} from "react-redux";
import Home from "./components/Home";
import Blockchain from  "./components/Blockchain";
import {BrowserRouter, Routes,Route} from "react-router-dom";


function App() {
    return (
        <BlockListProvider>
            <Provider store={BlockStore}>,
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/blockchain" element={<Blockchain/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </BlockListProvider>
    )
}

export default App;
