import styled from "styled-components";

export const StyledSearch = styled.input`
  height: 36px;
  background: rgb(39, 39, 41);
  border: 1px solid rgb(52, 53, 54);
  width: 100%;
  color: white;
  padding: 0 20px;
`;

export const StyledResults = styled.div`
  width: 286px;
  min-height: 30px;
  background: rgb(39, 39, 41);
  border: 1px solid rgb(52, 53, 54);
  position: absolute;
  top: 45px;
  padding: 0 20px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 24px;
  width: 100%;
  max-width: 286px;
`;

export const SearchResult = styled.div`
  color: white;
  cursor: pointer;
  margin: 5px 0;
`;
