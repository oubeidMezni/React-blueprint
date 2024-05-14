import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { ParticipantsReducers } from "./participantsReducer";
const reducers = combineReducers({reducer:ParticipantsReducers
});
export default createStore(reducers, applyMiddleware(logger));
