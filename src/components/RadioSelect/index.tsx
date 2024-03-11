import { Info } from '@phosphor-icons/react';
import { Radio, RadioChangeEvent, Tooltip } from 'antd';
import * as S from './styles';
interface RadioProps {
  label?: string;
  infoText?: string;
  status?: '' | 'warning' | 'error' | undefined;
  errorShow?: boolean;
  optional?: boolean;
  color?: string;
  firstOption?: string;
  secondOption?: string;
  firstValue?: string | number | boolean;
  secondValue?: string | number | boolean;
  value?: string | number | boolean;
  radioFunction?: (e: RadioChangeEvent) => void;
  disable?: boolean;
}

export const RadioSelect: React.FC<RadioProps> = ({
  label,
  infoText,
  errorShow,
  color,
  firstValue,
  secondValue,
  value,
  radioFunction,
  firstOption,
  secondOption,
  optional,
  disable
}) => {
  return (
    <S.Container>
      {label && (
        <S.Label>
          {label}
          {!optional && <p>*</p>}
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
        <Radio.Group onChange={radioFunction} value={value} disabled={disable}>
          <S.RadioArea value={firstValue}>{firstOption}</S.RadioArea>
          <S.RadioArea value={secondValue}>{secondOption}</S.RadioArea>
        </Radio.Group>
      </div>
    </S.Container>
  );
};
