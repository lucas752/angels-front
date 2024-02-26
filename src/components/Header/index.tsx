import * as S from './styles';
import logo  from '../../assets/angelsLogo.svg'

interface HeaderProps {
}

export const Header : React.FC<HeaderProps> = ({
}) => {
    return (
        <S.Container>
            <S.Logo src={logo} alt="Angels logo" />
        </S.Container>
        )
    };