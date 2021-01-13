import styled from "styled-components";

const SingleJobWrapper = styled.div`
  box-shadow: 2px 4px 8px #dfdfdf;
  padding: 2rem;
  border-radius: 10px;

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
    background: #4caf50;
  }

  .delete-button {
    background: #f44336;
  }

  .apply-button {
    width: 200px;
    padding: 10px;
  }

  .contact-info {
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 2rem;
    margin-top: 2rem;
    box-shadow: 2px 4px 8px #dfdfdf;
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
      width: 200px;
    }
  }

  @media screen and (max-width: 800px) {
    form {
      padding: 0 1rem;
      width: 100%;
    }

    input {
      width: 100%;
    }
  }
`;

export default SingleJobWrapper;
