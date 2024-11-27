import {createStore, combineReducers, applyMiddleware} from "redux";
import jobsReducer from "./reducers/jobsReducer";
import userReducer from "./reducers/userReducer";
import {thunk} from "redux-thunk";
import employeesReducer from "./reducers/employeesReducer";


// Combine all reducers
const rootReducer = combineReducers({
    jobs: jobsReducer,
    user: userReducer,
    employees: employeesReducer,
});

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
