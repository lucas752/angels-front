import React from 'react';
import * as S from './styles';
import { Tooltip } from 'antd';
import { Info } from '@phosphor-icons/react';

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
  infoText?: string;
  status?: '' | 'warning' | 'error' | undefined;
  errorShow?: boolean;
  mask: string | (string | RegExp)[];
}
export const InputMask: React.FC<InputProps> = ({
  label,
  type,
  placeHolder,
  value,
  disabled,
  inputFunction,
  infoText,
  errorShow,
  color,
  mask
}) => {
  return (
    <S.Container>
      {label && (
        <S.Label>
          {label}
          {infoText &&
            (errorShow === true ? (
              <Tooltip title={infoText} color={'red'} open={errorShow}>
                <Info size={20} color={color} />
              </Tooltip>
            ) : (
              <Tooltip title={infoText} color={color}>
                <Info size={20} color={color} />
              </Tooltip>
            ))}
        </S.Label>
      )}
      <S.InputArea
        disabled={disabled}
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={inputFunction}
        mask={mask}
      />
    </S.Container>
  );
};
