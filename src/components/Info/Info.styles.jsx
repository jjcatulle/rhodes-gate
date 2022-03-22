import styled from "styled-components";

export const InfoCtn = styled.div`
  // max-width: 90rem;
  
  width: 100vw;

  display: flex;
  flex-direction: column;
  // min-height: 50rem;
  padding: 0 5rem;
  padding-top: 10rem;
  //   background: linear-gradient(to left bottom, #ee6d37 20%, #fff 20%, #ee6d37 20%);

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: right;

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
    padding-top: 2rem;
  }

  @media screen and (max-width: 800px) {
    padding: 0rem;
    padding-top: 3rem;

    .header {
      align-items: center;
      text-align: center;

      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 0.7rem;
      }
    }

    .body {
      padding: 1rem;
      padding-top: 1rem;
    }
  }
`;

export const InfoItem = styled.div`
  padding-right: 2rem;
  margin-bottom: 1rem;
  .icon {
    color: #ee6d37;
    font-size: 1.1rem;
    border: 0.12rem solid #ee6d37;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }
  .title {
    font-weight: bold;
    font-size: 1.3rem;
    padding-top: 0.6rem;
  }
  .description {
    padding-top: 0.6rem;
    color: #73729a;
    font-size: 1rem;
  }

  @media screen and (max-width: 800px) {
    padding-right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: red;
    text-align: center;
    .title {
      font-size: 0.9rem;
      margin: auto;
      text-align: center;
      // background: green;
    }
    .description {
      font-size: 0.8rem;
    }
  }
`;
