import Cards from "@/components/Cards";
import Modal from "@/components/Modal";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styled";
import { CharactersProps } from "@/types/types";
import { removeAll, useFavoritesState } from "@/Redux/addFavorites";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<CharactersProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<React.SetStateAction<CharactersProps>>();
  const [loading, setLoading] = useState(false)

  const { selectedFavorites } = useFavoritesState();

  useEffect(() => {
    if (selectedFavorites.length > 0) {
      loadFavorites();
    }
  }, [selectedFavorites]);

  const loadFavorites = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${selectedFavorites}`);
      const { data } = res;

      if (data) {
        if (Array.isArray(data)) {
          setCharacters(data);
        } else {
          setCharacters([data]);
        }
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };

  const handleClearFavorites = () => {
    dispatch(removeAll());
  }

  return (
    <React.Fragment>
      {loading ?
        <S.HomeWrapper>
          <S.TextFavorites>Carregando...</S.TextFavorites>
        </S.HomeWrapper> :
        <S.HomeWrapper>
          <S.BoxTitle>
            <Link href={'/Characters'}>
              <p >Voltar</p>
            </Link>
            <S.TextFavorites>Favoritos</S.TextFavorites>
          </S.BoxTitle>
          <S.ButtonUtilities onClick={handleClearFavorites}>Limpar Favoritos</S.ButtonUtilities>
          {selectedFavorites.length > 0 && characters.length > 0 ? (
            <Cards characters={characters as unknown as CharactersProps} setChoice={setSelectedCharacter} setOpenModal={setOpenModal} setLoading={setLoading}/>
          ) : (
            <S.NoCharacters>
              <S.TextNoCharacters>Sem favoritos</S.TextNoCharacters>
            </S.NoCharacters>
          )}
          {openModal && selectedCharacter !== null && (
            <Modal choice={selectedCharacter as CharactersProps} setOpenModal={setOpenModal} />
          )}
        </S.HomeWrapper>}
    </React.Fragment>
  );
};

export default FavoritesPage;