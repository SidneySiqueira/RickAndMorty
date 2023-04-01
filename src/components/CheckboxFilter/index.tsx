import { setSelectedGender, setSelectedStatus } from "@/Redux/filterSlice";
import { RootState } from "@/Redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styled";

interface Option {
  value: string;
  label: string;
}

interface RadioOptionProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({ id, name, label, checked, onChange }) => (
  <S.Box>
    <S.Check
      type="radio"
      id={id} name={name}
      value={id}
      checked={checked}
      onChange={onChange} />
    <S.Text>{label}</S.Text>
  </S.Box>
);

interface RadioGroupProps {
  title: string;
  options: Option[];
  selectedOption: string;
  onRadioChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ title, options, selectedOption, onRadioChange }) => (

  <div>
    <S.Title>{title}</S.Title>
    {options.map((option) => (
      <RadioOption
        key={option.value}
        id={option.value}
        name={title}
        label={option.label}
        checked={selectedOption === option.value}
        onChange={() => onRadioChange(option.value)} />
    ))}
  </div>
);
interface CheckboxFilterProps {
  optionsStatus: Option[];
  optionsGender: Option[];
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({ optionsStatus, optionsGender }) => {
  const dispatch = useDispatch();
  const selectedStatus = useSelector((state: RootState) => state.filter.selectedStatus);
  const selectedGender = useSelector((state: RootState) => state.filter.selectedGender);

  const handleRadioChangeStatus = (value: string) => {
    dispatch(setSelectedStatus([value]));
  };

  const handleRadioChangeGender = (value: string) => {
    dispatch(setSelectedGender([value]));
  };

  return (
    <div data-testid='box-checkboxFilter'>
      <RadioGroup
        title="Genêro"
        options={optionsGender}
        selectedOption={selectedGender[0]}
        onRadioChange={handleRadioChangeGender} />
      <RadioGroup
        title="Status"
        options={optionsStatus}
        selectedOption={selectedStatus[0]}
        onRadioChange={handleRadioChangeStatus} />
    </div>
  );
};

export default CheckboxFilter;