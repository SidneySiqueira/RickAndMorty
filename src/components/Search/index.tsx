import * as S from "./styled"
import useMediaQuery from "@mui/material/useMediaQuery";
import { SetStateAction } from "react";

interface SearchProps {
    allCharacters: () => void,
    typing: string,
    setTyping: React.Dispatch<SetStateAction<string>>
    setNumberPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Search({ allCharacters, typing, setTyping, setNumberPage }: SearchProps) {

    const isMobile = useMediaQuery("(max-width:768px)");

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (typing !== "") {
                allCharacters();
                setNumberPage(1)
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
            <S.Input onChange={(e) => setTyping(e.target.value)} onKeyDown={handleKeyPress} />
            <S.Button id="submit" onClick={() => {
                allCharacters();
                setNumberPage(1);
            }}>
                Buscar
            </S.Button>
        </S.Search>
    )
}