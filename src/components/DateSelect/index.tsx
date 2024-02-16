import React from 'react';
import * as S from './styles';

interface InputProps {
  label?: string;
  inputFunction?: React.ChangeEventHandler<HTMLInputElement>;
}
export const DateSelect: React.FC<InputProps> = ({ label }) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.DataArea />
    </S.Container>
  );
};
