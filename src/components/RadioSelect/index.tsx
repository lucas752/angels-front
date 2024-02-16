import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'antd';
import * as S from './styles';
interface RadioProps {
  label?: string;
  infoText?: string;
  status?: '' | 'warning' | 'error' | undefined;
  errorShow?: boolean;
  color?: string;
}

export const RadioSelect: React.FC<RadioProps> = ({
  label,
  infoText,
  errorShow,
  color
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
      <div>
        <S.RadioArea>Sim</S.RadioArea>
        <S.RadioArea>Nao</S.RadioArea>
      </div>
    </S.Container>
  );
};
