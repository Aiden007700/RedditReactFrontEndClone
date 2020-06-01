import styled from "styled-components";

export const StyledCard = styled.div`
  display: inline-grid;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 100%;
  margin-bottom: 24px;

  info {
    position: relative;
    padding: 1.5rem;
    color: white;
    background: rgb(52, 53, 54);

    h1 {
      font-size: 1.7rem;
      line-height: 1.8rem;
      letter-spacing: -0.5px;
      margin: 0;
      margin-top: 0.5rem;
      margin-bottom: 1.2rem;
    }

    h2 {
      font-size: 1rem;
      line-height: 1.2rem;
      margin: 0;
      font-weight: normal;
    }

    h3 {
      font-size: 0.9rem;
      line-height: 2rem;
      margin: 0;
      font-weight: normal;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    padding: 1rem 1.5rem;
    background-color: rgba(0, 0, 0, 0.05);
    background-image: url(https://i.imgur.com/ff1IuQX.png);
    background-position: center right 1.5rem;
    background-repeat: no-repeat;
    background-size: 1.5rem 1.5rem;
    font-weight: bold;
    border-top: solid 1px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background-color: #ff5700;
    }
  }
`;
