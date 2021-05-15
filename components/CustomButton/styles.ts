import styled from 'styled-components';

interface IProps {
  widthButton: string;
  heightButton: string;
}

export const Container = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;


  a {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #FFCC01;
      color: #1260B3;
      width: ${(props) => props.widthButton};
      height: ${(props) => props.heightButton};
      font-size: 20px;
      font-weight: bolder;
      border-width: 5px;
      border-style: solid;
      border-color: #1260B3;
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


