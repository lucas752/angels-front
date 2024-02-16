import * as S from './styles';

interface SelectProps {
  label?: string;
}

export const Select: React.FC<SelectProps> = ({ label }) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.SelectArea variant="borderless" />
    </S.Container>
  );
};
