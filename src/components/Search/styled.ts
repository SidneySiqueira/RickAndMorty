import styled from "styled-components";
import Link from "next/link";

interface props {
  isMobile: boolean;
}

export const Search = styled.div`
  width: 75%;
  max-width: 1550px;
  display: flex;
  align-items: center;
  margin: 10px 10px 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxLink = styled(Link)<props>`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.isMobile ? "80%" : "20%")};
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`;

export const Input = styled.input`
  width: 60%;
  height: 50px;
  margin: 20px;
  border: 2px solid black;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 25%;
  height: 50px;
  font-family: sans-serif;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #ffd425;
  cursor: pointer;
  border: 2px solid #231f20;
  border-radius: 10px;
  background-color: #8c237a;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  :hover {
    background-color: #424a3f;
    transition: 0.7s;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
