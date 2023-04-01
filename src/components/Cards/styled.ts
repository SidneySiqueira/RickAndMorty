import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const BoxCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1550px;
  width: 90%;
`;

export const Card = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
  background: linear-gradient(to bottom, #8c237a, #8c237a, #424a3f);
  border: 3px solid #231f20;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const ImageCard = styled.img`
  margin: 10px 10px 0 10px;
  border: 1px solid white;
  border-radius: 5px;
  overflow: hidden;
  width: 250px;
  height: 250px;
`;
export const NameCard = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #ffd627;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  margin: auto 10px;
  text-align: center;
`;

export const Favorites = styled(FavoriteIcon)`
  color: red;
  position: absolute;
  width: 20px;
  top: 10px;
  right: 15px;
  z-index: 1;
`;
