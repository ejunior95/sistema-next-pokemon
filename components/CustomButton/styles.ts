import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
      background-color: #FFCC01;
      color: #1260B3;
      padding: 10px 35px 10px 35px;
      font-size: 20px;
      font-weight: bolder;
      border: 5px solid #1260B3;
      border-radius: 30px;
      cursor: pointer;
      position: relative;
      transition: .3s ease-in-out;
  }

  a:hover {
    transition: .3s ease-in-out;
    transform: scale(1.2)
  }
`;
