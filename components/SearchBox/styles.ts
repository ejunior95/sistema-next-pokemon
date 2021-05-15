import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  background-color: #ffffff;
  height: 70%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  input { 
      background-color: transparent;
      border: none;
      color: #000000;
      outline: none;
      width: 90%;
      font-size: 16px;
    &::placeholder {
          color: #BABABA;
    }
  }
  .icone-search {
      position: absolute;
      left: 15px;
      color: #BABABA;
  }
  .icone-search-expand {
      position: absolute;
      right: 15px;
      color: #BABABA;
      cursor: pointer;
  }
`;
