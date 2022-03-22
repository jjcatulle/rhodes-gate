import styled from "styled-components";
import myImage from "../../assets/logo3.png";

export const ContactPageCtn = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.86),
      rgba(255, 255, 255, 1)
    ),
    url("${myImage}");
  // margin-top: 5rem;
  display: flex;
  justify-content: center;
  height: 90vh;
  overflow: scroll;
  .card {
    margin: auto;
    width: 30rem;
    margin: 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ctn {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .btn {
    margin-top: 1rem;
    background: #ee6d37;
    border-radius: 0.7rem;
    font-family: "Ubuntu", sans-serif;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: .6rem;
`;
