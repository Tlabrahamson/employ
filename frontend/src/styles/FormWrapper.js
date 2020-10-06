import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #3d4349;
  padding: 2rem;
  color: #fff;
  border-radius: 10px;

  form {
    display: grid;
    background: #2e343b;
    padding: 0 1rem;
    border-radius: 10px;
    margin: 2rem 0;
  }

  input {
    width: 500px;
    font-size: 1rem;
    padding: 0.3rem 0;
  }

  textarea {
    font-family: "Roboto", sans-serif;
    height: 100px;
    padding: 0.3rem 0.2rem;
  }

  label {
    margin-top: 2rem;
    margin-bottom: 0.4rem;
    font-size: 18px;
  }

  button {
    margin: 2rem 0;
    width: 100px;
    cursor: pointer;
    border-radius: 10px;
    padding: 0.3rem 0;
    font-size: 1rem;
    background: #e74990;
    color: #fff;
    border: none;
  }

  a {
    color: inherit;
  }

  @media screen and (max-width: 1200px) {
    display: inline-block;
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

export default FormWrapper;
