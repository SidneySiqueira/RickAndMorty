import styled from "styled-components";

interface props {
  isIncludes: boolean;
}

export const Modal = styled.div`
  width: 500px;
  position: fixed;
  top: 10%;
  left: 30%;
  border: 10px solid #00c400;
  background: linear-gradient(to bottom, #8c237a, #8c237a, #424a3f);
  max-height: 80%;
  border-radius: 10px;
  overflow-y: auto;
  z-index: 999;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #8c237a;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffd627;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
  }
`;

export const Box = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: 10px;
  overflow: hidden;
  border: 1px solid #231f20;
  border-radius: 5px;
`;

export const X = styled.p`
  width: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-align: center;
  margin: 5px;
  position: absolute;
  right: 0;
  color:#231f20;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #231f20;
  background-color: #ffd627;
  border-radius: 50px;
  cursor: pointer;
`;

export const Name = styled.p`
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #00b5cc;
  text-align: center;
  margin-bottom: 20px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #231f20;
`;

export const Alert = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  min-width: 30px;
  text-align: center;
  padding: 3px;
  margin: 3px;
  color: white;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
`;

export const Topics = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #00b5cc;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #231f20;
`;
export const Itens = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  min-width: 30px;
  text-align: center;
  padding: 3px;
  margin: 3px;
  color: #231f20;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #231f20;
  background-color: #ffd627;
  border: 1px solid #231f20;
  border-radius: 5px;
`;

export const AddFavorites = styled.button<props>`
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  font-family: sans-serif;
  font-size: 10px;
  font-weight: bold;
  color: #ffd627;
  background: transparent;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background: ${(props) => (props.isIncludes ? "#d50000" : "#00c400")};
  }
`;

export const BoxNames = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxAlert = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
