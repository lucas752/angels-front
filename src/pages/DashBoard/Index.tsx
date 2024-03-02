import { MagnifyingGlass, PlusCircle } from '@phosphor-icons/react';
import { Button } from '../../components/Button/index.tsx';
import { Input } from '../../components/Input/index.tsx';
import * as S from './styles.ts';
import { PregnantCard } from '../../features/DashBoard/PregnantCard/index.tsx';

export function Dashboard() {
  return (
    <S.Container>
      <S.NavBarContainer>naavbars</S.NavBarContainer>
      <S.Content>
        <S.HeaderContent>
          <Input
            placeHolder="Digite o nome da gestante..."
            rightAdd={<MagnifyingGlass size={20} color="#b1488a" />}
          />
          <Button
            label="NOVA GESTAÇÃO"
            shape="round"
            icon={<PlusCircle size={20} color="#fff" />}
          />
        </S.HeaderContent>
        <S.CardsContainer>
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
          <PregnantCard />
        </S.CardsContainer>
      </S.Content>
    </S.Container>
  );
}
