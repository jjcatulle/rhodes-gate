import styled from "styled-components";

export const UpcomingCtn = styled.div`
  padding: 0 5rem;
  width: 100vw;
  // margin-top:5rem;
  // background:red;

  text-align: center;

  .header {
    text-align: right;
    padding-top: 2rem;
    font-family: "Orbitron", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;

    span {
      color: #ee6d37;
    }
  }
  .body {
    padding-top: 2rem;
  }

  .des {
    color: #73729a;
    // font-weight: 450;
    font-size: .91rem;
    line-height:1.5rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;
