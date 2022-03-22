import styled from "styled-components";
import myImage from "../../assets/logo3.png";

export const AboutCtn = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.86),
      rgba(255, 255, 255, 1)
    ),
    url("${myImage}");
  background-size: 30%;
  width: 100vw;
  padding-bottom: 2rem;
  //   height: 100vh;
  // height: 90vh;
  // overflow: scroll;

  display: flex;
  flex-direction: column;
  // justify-content:center;
  align-items: center;

  .about-ctn {
    padding: 5rem 10rem 5rem 10rem;
    width: 80%;
    // height: 30rem;
    background: #f5f5f5;
    border: 1px solid grey;
    border-radius: 1rem;
    text-align: center;

    .title {
      font-family: "Orbitron", sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #000;

      span {
        color: #ee6d37;
      }
    }

    .desc {
      font-size: 1.6rem;
      font-weight: 350;
      margin-top: 1rem;
      color: #73729a;
    }

    .btn {
      margin-top: 2rem;
      background: #ee6d37;
      border-radius: 0.7rem;
      font-family: "Ubuntu", sans-serif;
    }
  }

  .myTeam {
    width: 100%;
    padding: 0 15rem;

    text-align: center;

    .header {
      margin-top: 5rem;
      font-family: "Orbitron", sans-serif;
      font-size: 2rem;
      font-weight: 700;

      span {
        color: #ee6d37;
      }
    }
  }

  .body {
    margin-top: 1rem;
    width: 100%;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .title {
    font-size: 1.2rem;
    color: #ee6d37;
  }

  .list-inline {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
    font-size: 1.5rem;
    color: red;
  }
  .list-inline-item > a {
    color: rgba(0, 0, 0, 0.6);
  }

  .bio {
    padding: 1rem;
    padding-top: 0rem;
    font-size: 1rem;
    font-weight: 300;
    color: #73729a;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 1rem;

    .about-ctn {
      padding: 5rem 1rem 0.5rem 1rem;
      width: 99%;

      .title {
        font-size: 1.5rem;
      }

      .desc {
        font-size: 1.2rem;
      }
    }

    .myTeam {
      padding: 0 0.5rem 1rem 0.5rem;
    }
  }
`;
