import { createAction } from "redux-actions";
import { SET_SUBREDDITS, SET_SUBREDDIT, SET_SUBREDDIT_NAME } from "./constants";
import * as api from "./api";

export const setSubreddits = createAction(SET_SUBREDDITS);
export const setSubreddit = createAction(SET_SUBREDDIT);
export const selectedSubredditName = createAction(SET_SUBREDDIT_NAME);

export const getSubreddits = (subreddits) => async (dispatch) => {
  const data = await api.getSubreddits(subreddits).then((data) => data);
  dispatch(setSubreddits(data.map((el) => el.data)));
};

export const getSubreddit = (subreddit, back = null, next = null) => async (
  dispatch
) => {
  const data = await api
    .getSubreddit(subreddit, back, next)
    .then((data) => data);
  dispatch(setSubreddit(data));
  dispatch(selectedSubredditName(subreddit));
};
