import styled from "styled-components";

const myImage =
  "https://oci.mypinata.cloud/ipfs/QmPBNhpXDssjrJwq3QqWYwVLewyHBoocxa63e2AjLJdbfP/2.png";

export const LandingCtn = styled.div`
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
      }
      .disc {
        font-size: 2rem;
      }

      .btn {
        margin-top: 1rem;
        background: #dd1155;
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
          background: #dd1155;
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
