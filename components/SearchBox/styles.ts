import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  background-color: #7E7394;
  height: 70%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  input { 
      background-color: transparent;
      border: none;
      color: #ffffff;
      outline: none;
      width: 90%;
      font-size: 18px;
    &::placeholder {
          color: #BABABA;
    }
  }
  .icone-search {
      position: absolute;
      left: 15px;
      color: #BABABA;
  }
`;
