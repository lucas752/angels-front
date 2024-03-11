import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { About } from '../../features/Home/About';
import { Angels } from '../../features/Home/Angels';
import { DataAngels } from '../../features/Home/DataAngels';
import { Partners } from '../../features/Home/Partners';
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
          <Partners/>
          <Footer/>
        </S.Content>
      </S.Container>
    </div>
  );
}
