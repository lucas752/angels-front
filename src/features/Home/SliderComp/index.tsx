import Slider from 'react-slick';
import * as S  from './styles';

export const SliderComp = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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

    return (
        <S.Container>
            <Slider {...settings}>
                <div>SliderComp</div>
                <div>SliderComp</div>
                <div>SliderComp</div>
                <div>SliderComp</div>
                <div>SliderComp</div>
            </Slider>
        </S.Container>
    )
}