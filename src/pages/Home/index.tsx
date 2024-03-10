
import { Header } from '../../components/Header';
import { About } from '../../features/Home/About';
import { Angels } from '../../features/Home/Angels';
import { DataAngels } from '../../features/Home/DataAngels';
import { Patners } from '../../features/Home/Patners';
import * as S from './styles';

export default function Home() {
  return (
    <div>
      <S.Container>
        <Header />
        <S.Content>
          <Angels/>
          <About/>
          <DataAngels/>
          <Patners/>
        </S.Content>
      </S.Container>
    </div>
  );
}
