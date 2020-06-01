import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubreddits,
  getSubreddit,
  subredditsSelector,
} from "../../data/subreddits";
import {
  StyledSearch,
  StyledResults,
  SearchWrapper,
  SearchResult,
} from "./styledSearch";

export const Search = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(subredditsSelector);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    const target = e.target.value;
    setSearchValue(target);
    if (target.length >= 3) dispatch(getSubreddits(target));
  };

  const handleSelect = (subreddit) => {
    setSearchValue("");
    dispatch(getSubreddit(subreddit));
  };

  const handleInputSubmit = (e) => {
    if (e.charCode === 13) {
      dispatch(getSubreddit(e.target.value));
      setSearchValue("");
    }
  };

  return (
    <>
      <SearchWrapper>
        <StyledSearch
          value={searchValue}
          onChange={handleSearch}
          onKeyPress={handleInputSubmit}
        />
        {Boolean(subreddits.length && searchValue.length > 3) && (
          <StyledResults>
            {subreddits.map((subreddit) => (
              <SearchResult
                onClick={() => handleSelect(subreddit.display_name)}
              >
                {subreddit.display_name}
              </SearchResult>
            ))}
          </StyledResults>
        )}
      </SearchWrapper>
    </>
  );
};
