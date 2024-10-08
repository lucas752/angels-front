import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import * as S from './styles';
import { Tooltip } from 'antd';
import { Info } from '@phosphor-icons/react';

interface SelectProps {
  label?: string;
  defaut?: string;
  selectFunc?: (
    value: unknown,
    option:
      | DefaultOptionType
      | BaseOptionType
      | (DefaultOptionType | BaseOptionType)[]
  ) => void;
  list?: Array<ListProps>;
  infoText?: string;
  status?: '' | 'warning' | 'error' | undefined;
  errorShow?: boolean;
  optional?: boolean;
  color?: string;
  value?: string;
  disable?: boolean;
}

interface ListProps {
  value?: string;
  label: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  defaut,
  selectFunc,
  list,
  infoText,
  errorShow,
  color,
  status,
  optional,
  value,
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
      <S.SelectArea
        variant="borderless"
        defaultValue={defaut}
        options={list}
        onChange={selectFunc}
        status={status}
        value={value}
        disabled={disable}
      >
        {list &&
          list.map((item) => (
            <option key={item.label} value={item.label}>
              {item.label}
            </option>
          ))}
      </S.SelectArea>
    </S.Container>
  );
};
