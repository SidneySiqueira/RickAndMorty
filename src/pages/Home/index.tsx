import Link from "next/link";
import { useState } from "react";
import * as S from "./styled";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <S.HomeWrapper>
      <S.Logo src={'images/Rick_And_Morty_Logo.png'} alt='Rick_And_Morty_Logo'/>
      <Link href="/Characters" style={{textDecoration: 'none'}}>
        <S.AllCharacters onClick={handleClick}>
          {loading ? "Carregando..." : "Todos Personagens"}
        </S.AllCharacters>
      </Link>
    </S.HomeWrapper>
  );
};

export default HomePage;