import {createStore} from "redux";
import BlockReducer from "./BlockReducer";

const BlockStore = createStore(BlockReducer);

export default BlockStore;