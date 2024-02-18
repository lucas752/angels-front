import React from 'react';
import * as S from './styles';

interface ButtonProps {
  label?: string | React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean | { delay?: number };
  shape?: 'circle' | 'default' | 'round';
  buttonFunction?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  icon,
  loading,
  shape,
  buttonFunction
}) => {
  return (
    <S.ButtonArea
      disabled={disabled}
      icon={icon}
      loading={loading}
      shape={shape}
      onClick={buttonFunction}
    >
      {label}
    </S.ButtonArea>
  );
};
