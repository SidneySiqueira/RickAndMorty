import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(to right, #baec00, #00c400);
  background-size: 100%;
  background-repeat: repeat;
  @media (max-width: 768px) {
    background-image: none;
    background-color: #ffd627;
    border: 10px solid black;
    border-radius: 5px;
  }
`;

export const BoxUtilities = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 75%;
    flex-direction: column;
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
    width: 100%;
    height: 50px;
    margin: 20px 0 0px;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  background-color: #8c237a;
  margin: 50px 0 50px 0;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #231f20;
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
`;
export const TextFavorites = styled.p`
  font-family: sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: #8c237a;
  text-align: center;
`;
