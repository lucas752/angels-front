import * as S from './styles';

interface InputProps {
  label?: string;
}
export const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputArea />
    </S.Container>
  );
};
