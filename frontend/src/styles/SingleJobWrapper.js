import styled from "styled-components";

const SingleJobWrapper = styled.div`
  background: #282d33;
  padding: 2rem;
  border-radius: 10px;
  color: #fff;

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 18px;
    padding-bottom: 1rem;
  }

  div {
    width: 25%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }

  button {
    margin: 2rem 0;
    width: 100px;
    cursor: pointer;
    border-radius: 10px;
    padding: 0.3rem 0;
    font-size: 1rem;
    color: #fff;
    border: none;
  }

  hr {
    margin: 1rem 0rem;
  }

  .edit-button {
    background: #40ca8c;
  }

  .delete-button {
    background: #e75149;
  }

  .apply-button {
    background: #e74990;
    width: 200px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    background: #3d4349;
    color: #fff;
    border-radius: 10px;
    width: 50%;

    input {
      width: 200px;
      font-size: 1rem;
      padding: 0.3rem 0;
    }

    label {
      margin-top: 2rem;
      margin-bottom: 0.4rem;
      font-size: 18px;
      width: 200px;
    }
  }

  @media screen and (max-width: 800px) {
    form {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;

export default SingleJobWrapper;
