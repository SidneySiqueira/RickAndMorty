import { Pagination } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, {
  SetStateAction,
  useEffect,
  useState,
} from "react";
import * as S from "./styled";
import Modal from "@/components/Modal";
import Filter from "@/components/Filter";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { optionsGender, optionsStatus } from "@/utils/options";
import Cards from "@/components/Cards";
import Search from "@/components/Search";
import { CharactersProps, Props } from "@/types/types";

export default function Characters() {
  const [characters, setCharacters] = useState<Props>();
  const [openModal, setOpenModal] = useState(false);
  const [numberPage, setNumberPage] = useState(1);
  const [choice, setChoice] = useState<React.SetStateAction<CharactersProps>>();
  const [loading, setLoading] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [typing, setTyping] = useState<SetStateAction<string>>('');

  const { selectedStatus, selectedGender } = useSelector(
    (state: RootState) => state.filter
  );

  const allCharacters = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${typing}&page=${numberPage}&status=${selectedStatus}&gender=${selectedGender}`);
      const response = res.data;
      if (response) {
        setCharacters(response);
      }
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false)
  };
  useEffect(() => {
    allCharacters();
  }, [numberPage]);

  const handleModalOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <S.Container>
      {!loading ? (
        <S.Box>
          <Search
            allCharacters={allCharacters}
            typing={typing as string}
            setTyping={setTyping}
            setNumberPage={setNumberPage}
            />
          <S.BoxUtilities>
            <S.ButtonUtilities onClick={handleModalOpen}>Filtrar</S.ButtonUtilities>
            <Filter
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              allCharacters={allCharacters}
              optionsGender={optionsGender}
              optionsStatus={optionsStatus}
            />
            <Link style={{ width: '100%' }} href='/Favorites'><S.ButtonUtilities>Favoritos</S.ButtonUtilities></Link>
          </S.BoxUtilities>
          {!loading && characters?.info.count !== 0 ? (
            <Cards
              characters={characters?.results as unknown as CharactersProps}
              setChoice={setChoice}
              setOpenModal={setOpenModal}
              setLoading={setLoading} />
          ) : (
            <S.NoCharacters>
              <S.TextNoCharacters>
                Sorry! No characters found
              </S.TextNoCharacters>
            </S.NoCharacters>
          )}
          {characters?.info.count && characters !== undefined && (
            <S.Pagination>
              <Pagination
                count={characters?.info.pages}
                color="primary"
                page={+numberPage}
                onChange={(e) =>
                  setNumberPage(+(e.target as HTMLElement).innerText)
                }
              />
            </S.Pagination>
          )}
        </S.Box>
      ) : (
        <S.Box>
          <S.TextFavorites>Carregando...</S.TextFavorites>
        </S.Box>
      )}
      {!loading && openModal && choice !== undefined && (
        <Modal choice={choice as CharactersProps} setOpenModal={setOpenModal} />
      )}
    </S.Container>
  );
}