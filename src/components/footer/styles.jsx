import styled from "styled-components";

export const Box = styled.div`
  flex: 1;
  background: #000;
  color: #eee;
  text-align: center;

  .btn {
    margin: auto;
    // background: red;
    // text-align:center;

    a {
      margin: 1rem;
      font-size: 2rem;
      color: #eeee;
    }
    margin-bottom: 1rem;
  }

  .trademark{
    padding-bottom:1rem;
  } 
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
