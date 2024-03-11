import { SliderComp } from "../SliderComp";
import * as S from "./styles";

export const Partners = () => {

    return (
        <S.Container>
          <S.Wrapper>
            <S.Header>Parceiros</S.Header> 
            <S.Slide>
              <SliderComp/>
            </S.Slide>
          </S.Wrapper>
        </S.Container>
    )
}