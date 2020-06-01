export const subredditsSelector = (state) => state.subreddits.subreddit_search;
export const subredditFeedSelector = (state) =>
  state.subreddits?.subreddit?.children;
export const subredditNextSelector = (state) =>
  state.subreddits.subreddit?.after;
export const subredditBackSelector = (state) =>
  state.subreddits.subreddit?.before;
export const selectedSubredditNameSelector = (state) =>
  state.subreddits.selectedSubredditName;
