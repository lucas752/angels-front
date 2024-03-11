import Slider from 'react-slick';
import * as S  from './styles';
import { Logos } from '../Logos';
import LogoUPE from '../../../assets/upe-universidade-de-pernambuco-logo.svg';
import LogoFACEPE from '../../../assets/Marca-FACEPE.svg';
import LogoCNPq from '../../../assets/CNPq_v2017_rgb.svg';
import LogoPPGEC from '../../../assets/PPGEC_UPE-positivo.svg';
import LogoDotLab from '../../../assets/dotlabbrazil.svg';
import LogoMC from '../../../assets/guirlanda.svg'

 let data = [
  { img: LogoUPE },
  { img: LogoFACEPE },
  { img: LogoCNPq },
  { img: LogoPPGEC },
  { img: LogoDotLab },
  { img: LogoMC }
 ];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const SliderComp = () => {

  const sliderProject = data.map((item, i) => (
    <Logos item={item} key={i} />
  ));

  return (
      <S.Container>
          <Slider {...settings}>
            {sliderProject}
          </Slider>
      </S.Container>
  )
}