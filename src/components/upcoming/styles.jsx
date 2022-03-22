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
    font-size: 2rem;
    font-weight: 700;
    text-align: left;

    span {
      color: #dd1155;
    }
  }
  .body {
    padding-top: 2rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;
