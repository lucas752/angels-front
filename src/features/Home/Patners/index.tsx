import { SliderComp } from "../SliderComp";
import * as S from "./styles";

export const Patners = () => {

    return (
        <S.Container>
           <S.Header>Parceiros</S.Header> 
           <S.Slide>
             <SliderComp/>
           </S.Slide>
        </S.Container>
    )
}