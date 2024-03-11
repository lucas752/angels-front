import * as S from './styles';

export const Logos = (props: { item: { img: any; }; }) => {

    const { img } = props.item;

    return (
        <S.Container>
            <img src={img} alt="Logo UPE" />
        </S.Container>
    )
}