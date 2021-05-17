import styled from 'styled-components';

export const Container = styled.div`
  background-color: #B4ADBE;
  height: 245px;
  min-height: 245px;
  max-height: 245px;
  width: 245px;
  min-width: 245px;
  max-width: 245px;
  border: 2px solid #100B16;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: fill;

  .container-id {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -22px;
    left: -22px;
    padding: 10px 15px 10px 15px;
    background-color: #535662;
    border-radius: 5px;
    transform: rotate(45deg);
    border: 1px solid #100B16;
}
.img-pokemon {
    width: 75%;
}
.id-pokemon {
    transform: rotate(-45deg);
    color: #ffffff;
  }
  .container-tipo {
    position: absolute;
    right: 20px;
    top: -15px;
  }
  .tipo-pokemon {
    color: #ffffff;
    background-color: #F25D52;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}
.rodape-nome {
    position: absolute;
    width: 245px;
    bottom: -20px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container-nome {  
    display: center;
    align-items: center;
    justify-content: center;
}
.nome-pokemon {
    color: #ffffff;
    background-color: #7E7394;
    border: 1px solid #100B16;
    border-radius: 5px;
    padding: 10px;
  }
`;
