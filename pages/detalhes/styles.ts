import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  nav {
    position: absolute;
    width: 100%;
    height: 8vh;
    background-color: #1260B3;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .logo-pokemon {
    width: 120px;
    height: 60px;
  }

  main { 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 1090px;
    height: 100vh;
    background-color: #dcdde1;
  }

  footer {
    position: absolute;
    width: 100%;
    height: 5vh;
    background-color: #1260B3;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer a {
    font-size: 0.8rem;
    width: 100%;
    color: #fff;
    text-align: center;
  }

`;
