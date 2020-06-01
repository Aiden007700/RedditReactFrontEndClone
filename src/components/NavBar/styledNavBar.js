import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  background: rgb(26, 26, 27);
`;

export const RedditLogo = styled.img.attrs({
  src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/500772/photo.png",
})`
  width: 48px;
  cursor: pointer;
  margin-right: 48px;
`;

