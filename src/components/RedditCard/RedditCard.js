import React from "react";
import { StyledCard } from "./styledRedditCard";

export const RedditCard = ({ data }) => {
  return (
    <StyledCard>
      <info>
        <h3>Thursday, July 16, 2015</h3>
        <h1>{data.title}</h1>
      </info>
      <a href={data.url} target="_blank">
        Read more
      </a>
    </StyledCard>
  );
};
