import apiClient from "../../utils/apiClient";

export const getSubreddits = (subreddit) =>
  apiClient
    .get(`/subreddits/search.json?limit=5&q=${subreddit}`)
    .then(({ data }) => {
      return data?.data?.children || [];
    });

export const getSubreddit = (subreddit, back, next) =>
  apiClient
    .get(
      `/r/${subreddit}/new.json?sort=new&limit=10${
        back ? "&before=" + back : ""
      }${next ? "&after=" + next : ""}`
    )
    .then(({ data }) => {
      return data?.data || null;
    });
