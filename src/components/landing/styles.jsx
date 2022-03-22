import styled from "styled-components";
import { myItem } from "../../data/constant";

const myImage =myItem.image

export const LandingCtn = styled.div`
  margin-top: 2rem;
  padding: 0 5rem;
  width: 100vw;
  height: 45rem;
  // background:red;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.52),
      rgba(255, 255, 255, 1)
    ),
    url("${myImage}");
  background-size: cover;

  display: flex;

  .left {
    width: 50%;
    // background: red;
    display: flex;

    .items {
      //   background: green;
      margin: auto;

      h2 {
        font-size: 3rem;
        font-family: "Orbitron", sans-serif;
      }
      .disc {
        font-size: 2rem;
      }

      .btn {
        margin-top: 1rem;
        background: #ee6d37;
        border-radius: 0.7rem;
        font-family: "Ubuntu", sans-serif;
      }
    }
  }

  .right {
    flex: 1;
    // background: green;
    display: flex;

    .ctn {
      width: 30rem;
      margin: auto;
    }
  }

  @media only screen and (max-width: 600px) {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 1)
      ),
      url("${myImage}");

    flex-direction: column;
    padding: 0 0rem;

    .left {
      //   background: red;
      width: 100%;

      .items {
        text-align: center;
        // background: green;
        margin: auto;

        h2 {
          font-size: 2rem;
        }
        .disc {
          font-size: 1.3rem;
        }

        .btn {
          margin-top: 1rem;
          background: #ee6d37;
        }
      }
    }

    .right {
      width: 100%;
      padding: 0rem 0rem 0rem 0rem;

      .ctn {
        width: 20rem;
        margin: auto;
      }
    }
  }
`;
