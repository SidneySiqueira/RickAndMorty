import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("images/rick_and_morty_paisagem.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    background-color: #8c237a;
    background-image: url("images/Rick_And_Morty_Logo.png");
    background-size: 300px 100px;
    background-repeat: repeat;
  }
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const BoxArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  color: #baec00;
  border: 2px solid #baec00;
  border-radius: 50px;
  background-color: #00c400;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #baec00;
  padding: 5px;
  :hover {
    background-color: #424a3f;
    transition: 0.7s;
  }
`;

export const TextFavorites = styled.p`
  width: 100%;
  font-family: sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: #00c400;
  border-radius: 10px;
  text-align: center;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #231f20;

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
  padding: 10px;
  margin-bottom: 30px;
  color: #00c400;
  border-radius: 10px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #baec00;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;
export const ButtonUtilities = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 20px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #ffd425;
  cursor: pointer;
  border: 2px solid #ffd425;
  border-radius: 10px;
  background-color: #00c400;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: #231f20;
  padding: 5px;
  :hover {
    background-color: #424a3f;
    transition: 0.7s;
  }
  @media (max-width: 768px) {
    height: 50px;
    margin: 20px;
  }
`;
