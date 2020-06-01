import styled from "styled-components";

export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const NavBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    margin: 10px 24px;

    &:hover {
      color: #ff5700;
    }
  }
`;
