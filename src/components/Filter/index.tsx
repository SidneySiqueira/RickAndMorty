import React from 'react';
import * as S from './styled';
import CheckboxFilter from '../CheckboxFilter';
import { removeSelected } from '@/Redux/filterSlice';
import { useDispatch } from 'react-redux';

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
  allCharacters: () => void;
  optionsStatus: { value: string; label: string }[];
  optionsGender: { value: string; label: string }[];
}

const Filter: React.FC<FilterProps> = ({
  isOpen,
  onClose,
  allCharacters,
  optionsStatus,
  optionsGender,
}) => {
  const dispatch = useDispatch();

  const handleClearFilter = () => {
    dispatch(removeSelected());
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.Box onClick={onClose} />
      <S.CardFilter>
        <S.Title>Filtro</S.Title>
        <CheckboxFilter
          optionsStatus={optionsStatus}
          optionsGender={optionsGender}
        />
        <S.Button onClick={()=>{
          onClose();
          allCharacters()
        }}>Filtrar</S.Button>
        <S.BoxClear>
          <S.Text onClick={handleClearFilter}>Limpar filtros</S.Text>
        </S.BoxClear>
      </S.CardFilter>
    </S.Container>
  );
};

export default Filter;