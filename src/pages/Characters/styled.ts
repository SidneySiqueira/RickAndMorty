import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffd627;
  background-image: url("images/Rick_And_Morty_Logo.png");
  background-size: 300px 100px;
  background-repeat: repeat;
  @media (max-width: 768px) {
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

// export const Box = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-image: url("images/Rick_And_Morty_Logo.png");
//     background-size: auto 100%;
//     background-repeat: repeat;
//     transform: rotate(-10deg);
//     transform-origin: top left;
//     z-index: -1;
//   }
// `;

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
export const TextFavorites = styled.p`
  font-family: sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: #8c237a;
  text-align: center;
`;
