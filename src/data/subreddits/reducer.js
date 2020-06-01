import { handleActions } from "redux-actions";
import * as constants from "./constants";

const getInitialState = () => ({
  subreddit_search: [],
  subreddit: null,
  selectedSubredditName: null,
});
const initialState = getInitialState();

const reducer = handleActions(
  {
    [constants.SET_SUBREDDITS]: (state, action) => {
      return {
        ...state,
        subreddit_search: action.payload,
      };
    },
    [constants.SET_SUBREDDIT]: (state, action) => {
      return {
        ...state,
        subreddit: action.payload,
      };
    },
    [constants.SET_SUBREDDIT_NAME]: (state, action) => {
      return {
        ...state,
        selectedSubredditName: action.payload,
      };
    },
  },
  initialState
);

export default reducer;
