import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to right, #baec00,  #00c400 );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BoxTitle = styled.div`
   display: flex; 
   margin-top: 50px;

   @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TextFavorites = styled.p`
  width: 100%;
  font-family: sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: #8c237a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 50px;
  }

`;

export const NoCharacters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1550px;
  width: 90%;
`;

export const TextNoCharacters = styled.h1`
  font-family: sans-serif;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;
  background-color: #d3011d;
  padding: 10px;
  margin-bottom: 30px;
  color: #ffd627;
  border: 2px solid #231f20;
  border-radius: 10px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;

  @media (max-width: 768px) {
    font-size: 60px;
  }

`;
export const ButtonUtilities = styled.button`
  width: 100px;
  margin: 20px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #ffd425;
  cursor: pointer;
  border: 2px solid #231f20;
  border-radius: 10px;
  background-color: #8c237a;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  padding: 5px;
  :hover {
    background-color: #424a3f;
    transition: 0.7s;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
    margin: 20px;
  }
`;