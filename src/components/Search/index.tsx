import * as S from "./styled"
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { SetStateAction, useState } from "react";
import { Props } from "@/types/types";

interface SearchProps {
    setCharacters: React.Dispatch<React.SetStateAction<Props>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Search({ setCharacters, setLoading }: SearchProps) {
    const [typing, setTyping] = useState<SetStateAction<string>>('');
    
    const isMobile = useMediaQuery("(max-width:768px)");
    
    const filterName = async () => {       
        setLoading(true)
        try {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${typing}`);
            const response = res.data;
            if (response) {
                setCharacters(response);
            }
        } catch (error) {
            console.log("error", error);
        }
        setLoading(false)
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          if (typing !== "") {
            filterName();
          }
        }
      };

    return (
        <S.Search data-testid='box-search'>
            <S.BoxLink isMobile={isMobile} href="/">
                <S.Image
                    src={'images/rickandmortyportal.png'}
                />
            </S.BoxLink>
            <S.Input onChange={(e) => setTyping(e.target.value)} onKeyDown={handleKeyPress}/>
            <S.Button id="submit" onClick={() => filterName()}>
                Buscar
            </S.Button>
        </S.Search>
    )
}