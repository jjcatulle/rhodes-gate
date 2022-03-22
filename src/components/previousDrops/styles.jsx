import styled from "styled-components";

export const PreviousCtn = styled.div`
  margin-top: 5rem;
  padding: 0 5rem;
  width: 100vw;
  // background:red;

  text-align: center;

  .header {
    text-align: left;
    padding-top: 2rem;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Orbitron", sans-serif;

    span {
      color: #ee6d37;
    }
  }
  .body {
    padding-top: 2rem;
  }

  @media only screen and (max-width: 1200px) {
    margin-top: 0rem;
    padding: 0 2rem;
  }
`;
