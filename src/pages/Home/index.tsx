
import { Header } from '../../components/Header';
import * as S from './styles';

export default function Home() {
  return (
    <div>
      <S.Container>
        <Header />
        <S.Content>
          <h1>angels</h1>
          <p>O sistema Angels é uma solução tecnológica que simplifica 
            o processo de acompanhamento pré-natal e oferece uma 
            plataforma centralizada para  o registro detalhado de dados
             e o acompanhamento adequado de cada etapa da gestação.</p>
        </S.Content>
      </S.Container>
    </div>
  );
}
