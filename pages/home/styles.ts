import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;

  p {
    width: 100%;
    text-align: center;
    padding-bottom: 10%;
    font-size: 2rem;
  }

  footer {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #1260B3;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  footer a {
    font-size: 0.8rem;
    width: 100%;
    color: #fff;
    text-align: center;
  }

  .logo-pokemon {
    width: 55vw;
    height: 50vh;
  }
`;
