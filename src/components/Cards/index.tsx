import axios from "axios";
import * as S from "./styled"
import { CharactersProps } from "@/types/types";
import { useFavoritesState } from "@/Redux/addFavorites";

interface Props {
  characters: CharactersProps,
  setChoice: React.Dispatch<React.SetStateAction<CharactersProps>>,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Cards({ characters, setChoice, setOpenModal, setLoading }: Props) {  

  const { selectedFavorites } = useFavoritesState();

  const choiceCharacter = (id: number) => {    
    setLoading(true)
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        const response = res.data;
        
        if (response) {
          setChoice(response);
        }
      })
    setOpenModal(true)
    setLoading(false)
  };

  if (Array.isArray(characters) && characters.length > 0) {
    return (
      <S.BoxCard data-testid='box-card'>
        {characters?.map((item) => {  
          return (
            <S.Card key={item?.name} onClick={() => choiceCharacter(item?.id)}>
              {selectedFavorites.includes(item?.id.toString()) && <S.Favorites fontSize="large"/>}
              <S.ImageCard src={item?.image} />
              <S.NameCard>{item?.name.substring(0, 30)}</S.NameCard>
            </S.Card>
          );
        })}
      </S.BoxCard>
    )
  } else {
    return (
      <S.BoxCard>
        <S.Card key={characters?.name} onClick={() => choiceCharacter(characters?.id)}>
          <S.ImageCard src={characters?.image} />
          <S.NameCard>{characters?.name?.substring(0, 30)}</S.NameCard>
        </S.Card>
      </S.BoxCard>
    )
  }
}