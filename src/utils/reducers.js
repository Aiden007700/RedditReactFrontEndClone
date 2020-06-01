import { combineReducers } from "redux";
import subreddits from "../data/subreddits/reducer";

const rootReducer = combineReducers({
  subreddits,
});

export default rootReducer;
