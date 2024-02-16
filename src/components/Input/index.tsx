import React from 'react';
import * as S from './styles';

interface InputProps {
  label?: string;
  type?: string;
  placeHolder?: string;
  value?: string;
  disabled?: boolean;
  rightAdd?: React.ReactNode;
  leftAdd?: React.ReactNode;
  color?: string;
  inputFunction?: React.ChangeEventHandler<HTMLInputElement>;
}
export const Input: React.FC<InputProps> = ({
  label,
  type,
  placeHolder,
  value,
  disabled,
  rightAdd,
  leftAdd,
  inputFunction
}) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputArea
        disabled={disabled}
        type={type}
        value={value}
        placeholder={placeHolder}
        suffix={rightAdd}
        prefix={leftAdd}
        onChange={inputFunction}
      />
    </S.Container>
  );
};
