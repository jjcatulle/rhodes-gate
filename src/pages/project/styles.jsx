import styled from "styled-components";

export const ProjectPageCtn = styled.div`
  margin-top: 2rem;
  padding: 0 5rem;
  padding-top: 5rem;

  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.72),
      rgba(255, 255, 255, 1)
    ),
    url("${(props) => props.image}");
  background-size: cover;
  // flex:2;

  width: 100vw;
  // height: 90vh;
  // overflow:scroll;

  display: flex;

  .left {
    width: 50%;

    .ctn {
      margin: auto;
      padding: 3rem;
    }
  }
  .right {
    flex: 1;

    .ctn {
      .title {
        text-align: center;
        font-size: 3rem;
      }
      .desc {
        // line-height: 1.5rem;
        // font-size: 1.2rem;

        // color: #73729a;
        // font-weight: 450;
        font-size: 1rem;
        line-height: 2rem;
      }

      .date {
        padding: 1rem 0;
        font-weight: 700;
        span {
          // font-weight: 400;
          color: #ee6d37;
        }
      }

      .label {
        padding: 1rem 0;
        font-weight: 700;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 1rem;
    padding-bottom: 10rem;
    padding-top: 1rem;

    flex-direction: column;

    .left {
      //   background: red;
      width: 100%;

      .ctn {
        padding: 2rem;
      }
    }

    .right {
      .ctn {
        text-align: center;

        .title {
          font-size: 2rem;
        }
        .desc {
          line-height: 1.5rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
