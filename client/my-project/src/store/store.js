import {configureStore, combineReducers} from "@reduxjs/toolkit";

import titleReducer from "./slices/title.slice";



const rootReducer = combineReducers({
    titles: titleReducer
});



const store = configureStore({
    reducer: rootReducer,
});

export default store;