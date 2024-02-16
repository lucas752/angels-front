import React from 'react';
import * as S from './styles';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'antd';

interface DateProps {
  label?: string;
  inputFunction?: (
    date: unknown | string,
    dateString: string | string[]
  ) => void;
  placeHolder?: string;
  infoText?: string;
  status?: '' | 'warning' | 'error' | undefined;
  errorShow?: boolean;
  color?: string;
}
export const DateSelect: React.FC<DateProps> = ({
  label,
  placeHolder,
  inputFunction,
  infoText,
  errorShow,
  color,
  status
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
      <S.DataArea
        placeholder={placeHolder}
        onChange={inputFunction}
        status={status}
      />
    </S.Container>
  );
};
