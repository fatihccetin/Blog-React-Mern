import { createHistogram, applyMiddleleware, compose } from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevtools} from "redux-devtools-extesion";
import rootReducer from "./reducers/rootReducer";


const store = createStore(rootReucer ,{},compose(
    applyMiddleleware(thunk),
    composeWithDevtools()
));

export default store;