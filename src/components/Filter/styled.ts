import styled from "styled-components";

interface props {
  isOpen: boolean;
}

export const Container = styled.div<props>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Box = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
`;

export const Title = styled.p`
  padding: 5px;
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #ffd627;
`;

export const CardFilter = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background-color: #8c237a;
  padding: 16px;
  z-index: 99;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  color: #8c237a;
  cursor: pointer;
  border: 2px solid #231f20;
  border-radius: 10px;
  background-color: #ffd425;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  padding: 10px;
  :hover {
    color: #ffd425;
    background-color: #424a3f;
    transition: 0.7s;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const BoxClear = styled.div`
  width: 100%; 
  display: flex; 
  justify-Content: center;
`;

export const Text = styled.label`
  padding:10px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #ffd425;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;