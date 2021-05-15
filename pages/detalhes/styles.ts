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
    background-color: #524153;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo-pokemon {
    width: 120px;
    height: 60px;
    margin: 0px 20px 0px 20px;
  }

`;
