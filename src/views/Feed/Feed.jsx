import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Name, NavBtns } from "./styledFeed";
import {
  getSubreddit,
  subredditFeedSelector,
  selectedSubredditNameSelector,
  subredditBackSelector,
  subredditNextSelector,
} from "../../data/subreddits";
import { RedditCard } from "../../components/RedditCard";

export const Feed = () => {
  const dispatch = useDispatch();
  const feedItems = useSelector(subredditFeedSelector) || [];
  const name = useSelector(selectedSubredditNameSelector);
  const back = useSelector(subredditBackSelector);
  const next = useSelector(subredditNextSelector);

  const handleBack = () => dispatch(getSubreddit(name, back));

  const handleNext = () => dispatch(getSubreddit(name, null, next));

  console.log(back, next);

  return (
    <>
      {name && <Name> r/{name} </Name>}
      {feedItems.map((el) => (
        <RedditCard data={el.data} />
      ))}

      <NavBtns>
        {back && (
          <a href="#" onClick={handleBack}>
            Back
          </a>
        )}
        {next && (
          <a href="#" onClick={handleNext}>
            Next
          </a>
        )}
      </NavBtns>
    </>
  );
};
