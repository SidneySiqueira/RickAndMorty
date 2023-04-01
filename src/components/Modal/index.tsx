import { addOrRemoveCharacter, useFavoritesState } from "@/Redux/addFavorites";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styled";
import { CharactersProps } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {
  choice: CharactersProps;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ choice, setOpenModal }: Props) {
  const [episodeNames, setEpisodeNames] = useState<string[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const { selectedFavorites } = useFavoritesState();

  const nameEpisode = async (url: string) => {
    try {
      const res = await axios.get(url);
      const response = res.data;
      if (response) {
        return response.name
      }
    } catch (error) {
      return 'Sem nome de episódio'
    }
  };

  const fetchEpisodeNames = async () => {
    const names = await Promise.all(
      choice?.episode?.map(async (episode: string) => {
        const name = await nameEpisode(episode);
        return name;
      }) ?? []
    );
    setEpisodeNames(names);
  };

  useEffect(() => {
    fetchEpisodeNames();
  }, [choice]);

  const handleFavorites = (value: string) => {
    dispatch(addOrRemoveCharacter([value]));
  };

  return (
    <S.Modal>
      <S.BoxImage>
        <S.Image src={choice?.image} />
        <S.X onClick={() => setOpenModal(false)}>X</S.X>
      </S.BoxImage>
      <S.Box>
        <>
          <S.Name>{choice?.name}</S.Name>
          <S.AddFavorites
            onClick={() => {
              handleFavorites(choice?.id.toString());
              setOpenModal(false);
            }}
            isIncludes={selectedFavorites.includes(choice?.id.toString())}
          >
            {selectedFavorites.includes(choice?.id.toString()) ? 'Remover dos favoritos' : 'Adicionar aos Favoritos'}
          </S.AddFavorites>
          <S.Topics>Gender:</S.Topics>
          <S.Itens>{choice?.gender}</S.Itens>
          <S.Topics>Species:</S.Topics>
          <S.Itens>{choice?.species}</S.Itens>
          <S.Topics>Status:</S.Topics>
          <S.Itens>{choice?.status}</S.Itens>
          {selectedFavorites.includes(choice?.id.toString()) && router.pathname === '/Favorites' &&
            <>
              <S.Topics>Origin:</S.Topics>
              <S.Itens>{choice?.origin?.name}</S.Itens>
              <S.Topics>Location:</S.Topics>
              <S.Itens>{choice?.location?.name}</S.Itens>
              <S.Topics>Episode appearances:</S.Topics>
              <S.BoxNames>
                {episodeNames.map((name) => (
                  <S.Itens>{name}</S.Itens>
                ))}
              </S.BoxNames>
            </>
          }
        </>
      </S.Box>
    </S.Modal>
  );
}