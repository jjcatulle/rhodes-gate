import styled from "styled-components";

export const TeamCtn = styled.div`
  margin-top: 10rem;
  // max-width: 90rem;
  width: 100vw;

  display: flex;
  flex-direction: column;
  min-height: 30rem;
  padding: 0 5rem;
  // background: linear-gradient(to right bottom, #fff 80%, #7b46ff);
  // background:red;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .title {
      width: 100%;
      font-weight: bold;
      font-size: 3rem;
      font-family: "Orbitron", sans-serif;

      span {
        color: #ee6d37;
      }
    }

    .description {
      width: 100%;
      color: #73729a;
      font-weight: 450;
      font-size: 1.4rem;
      padding: 1rem 0;
    }
  }

  .body {
    flex: 1;
    width: 100%;
    padding: 5rem 15rem 0 15rem;
  }

  @media screen and (max-width: 800px) {
    padding-top: 3rem;

    .header {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 0.7rem;
      }
    }

    .body {
      padding: 0;
      padding-top: 1rem;
    }
  }
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  .name {
    font-weight: bold;
    padding-top: 0.5rem;
  }
  .position {
    color: #ee6d37;
    padding-top: 0.2rem;
    font-weight: 500;
  }
  .icons {
    padding-top: 0.5rem;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.1rem;

    * {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 800px) {
    .position {
      font-size: 0.8rem;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
