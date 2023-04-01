import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #baec00,  #00c400 );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 60%;
`;

export const AllCharacters = styled.div`
    width: 90%;
    padding: 15px;
    font-size: 1.563rem;
    font-weight: bold;
    text-align: center;
    border-radius: 3.125rem;
    color: #00b5cc;
    background: #9d2882;

  @media (min-width: 568px) {
    width: 100%;
  }
    :hover {
        background: #3f1141; 
    }
`;